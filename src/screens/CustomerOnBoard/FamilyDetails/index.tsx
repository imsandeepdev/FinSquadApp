import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDatePicker, AppDropdown, AppDocumentUpload } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const RELATIONSHIP_OPTIONS = [
  "Father",
  "Mother",
  "Spouse",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Other",
];

const ID_PROOF_OPTIONS = [
  "Aadhaar Card",
  "PAN Card",
  "Voter ID",
  "Driving License",
  "Passport",
];

const FamilyDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Family Details
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <AppTextInput
          title="Name"
          placeholder="Enter name"
          value={data.familyName}
          onChangeText={(text) =>
            updateData("familyName", text)
          }
        />

        <AppDropdown
          title="Relationship"
          placeholder="Select relationship"
          value={data.familyRelation}
          options={RELATIONSHIP_OPTIONS}
          onSelect={(value) => updateData("familyRelation", value)}
        />

        <AppDatePicker
          title="Date of Birth"
          value={data.familyDob}
          onChange={(date) => updateData("familyDob", date)}
          maxDate={new Date()}
        />

        <AppTextInput
          title="Mobile Number"
          placeholder="Enter mobile"
          keyboardType="phone-pad"
          maxLength={10}
          value={data.familyMobile}
          onChangeText={(text) =>
            updateData("familyMobile", text)
          }
        />

        <AppTextInput
          title="Aadhaar Number"
          placeholder="XXXX XXXX XXXX"
          keyboardType="numeric"
          maxLength={12}
          value={data.familyAadhaar}
          onChangeText={(text) =>
            updateData("familyAadhaar", text)
          }
        />

        <AppDocumentUpload
          title="ID Proof"
          docTypeOptions={ID_PROOF_OPTIONS}
          docTypeValue={data.familyDocType}
          onDocTypeSelect={(value) => updateData("familyDocType", value)}
          frontImageUri={data.familyDocFrontUri}
          backImageUri={data.familyDocBackUri}
          onFrontImageSelected={(uri) => updateData("familyDocFrontUri", uri)}
          onBackImageSelected={(uri) => updateData("familyDocBackUri", uri)}
          onFrontImageRemoved={() => updateData("familyDocFrontUri", "")}
          onBackImageRemoved={() => updateData("familyDocBackUri", "")}
        />

      </View>

    </View>
  );
};

export default FamilyDetails;

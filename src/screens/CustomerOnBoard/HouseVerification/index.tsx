import React, { useEffect } from "react";
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

const HOUSE_TYPE_OPTIONS = ["Owned", "Rented"];

const OWNERSHIP_PROOF_OPTIONS = [
  "Electricity Bill",
  "Property Tax Receipt",
  "Rent Agreement",
  "Sale Deed",
  "Other",
];

const YES_NO_OPTIONS = ["Yes", "No"];

const HouseVerification: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  // Prefill applicant name from the Customer Master step, once, if not
  // already set by the user on this screen.
  useEffect(() => {
    if (!data.hvApplicantName && data.fullName) {
      updateData("hvApplicantName", data.fullName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          House Verification
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <Text style={styles.sectionLabel}>
          Residence Verification
        </Text>

        <AppTextInput
          title="Applicant Name"
          placeholder="Enter applicant name"
          value={data.hvApplicantName}
          onChangeText={(text) => updateData("hvApplicantName", text)}
        />

        <AppDatePicker
          title="Verification Date"
          value={data.hvVerificationDate}
          onChange={(date) => updateData("hvVerificationDate", date)}
          maxDate={new Date()}
        />

        <AppTextInput
          title="Verified By (Field Officer)"
          placeholder="Enter field officer name"
          value={data.hvVerifiedBy}
          onChangeText={(text) => updateData("hvVerifiedBy", text)}
        />

        <AppDropdown
          title="House Type"
          placeholder="Select house type"
          value={data.hvHouseType}
          options={HOUSE_TYPE_OPTIONS}
          onSelect={(value) => updateData("hvHouseType", value)}
        />

        <AppDropdown
          title="Ownership Proof Type"
          placeholder="Select ownership proof type"
          value={data.hvOwnershipProofType}
          options={OWNERSHIP_PROOF_OPTIONS}
          onSelect={(value) => updateData("hvOwnershipProofType", value)}
        />

        <AppTextInput
          title="Duration of Stay at Address"
          placeholder="e.g. 3 years"
          value={data.hvDurationOfStay}
          onChangeText={(text) => updateData("hvDurationOfStay", text)}
        />

        <AppDropdown
          title="Address Matches Application"
          placeholder="Select Yes/No"
          value={data.hvAddressMatches}
          options={YES_NO_OPTIONS}
          onSelect={(value) => updateData("hvAddressMatches", value)}
        />

        <AppTextInput
          title="Neighbor Verification Name"
          placeholder="Enter neighbor's name"
          value={data.hvNeighborVerificationName}
          onChangeText={(text) => updateData("hvNeighborVerificationName", text)}
        />

        <AppDropdown
          title="GPS Location Captured"
          placeholder="Select Yes/No"
          value={data.hvGpsCaptured}
          options={YES_NO_OPTIONS}
          onSelect={(value) => updateData("hvGpsCaptured", value)}
        />

        <AppDocumentUpload
          title="Upload House Photo"
          imageUri={data.hvHousePhotoUri}
          onImageSelected={(uri) => updateData("hvHousePhotoUri", uri)}
          onImageRemoved={() => updateData("hvHousePhotoUri", "")}
        />

        <AppDocumentUpload
          title="Upload Landmark Photo"
          imageUri={data.hvLandmarkPhotoUri}
          onImageSelected={(uri) => updateData("hvLandmarkPhotoUri", uri)}
          onImageRemoved={() => updateData("hvLandmarkPhotoUri", "")}
        />

      </View>

    </View>
  );
};

export default HouseVerification;

import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDocumentUpload } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const KYC_DOC_OPTIONS = ["Passport", "Driving License", "Voter ID"];

const KYCDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        KYC Details
      </Text>

      {/* Status Card */}

      <View style={styles.statusCard}>

        <View style={styles.statusCircle} />

        <View style={styles.statusTextWrap}>

          <Text style={styles.statusTitle}>
            KYC Verification
          </Text>

          <Text style={styles.statusSub}>
            Please complete all details.
          </Text>

        </View>

        <Text style={styles.pending}>
          Pending
        </Text>

      </View>

      {/* Form */}

      {/*
        PAN and Aadhaar are already captured in Customer Master (Step 1) —
        collecting them again here would just be asking twice, so those two
        fields have been removed from this step.
      */}

      <View style={styles.card}>

        <AppTextInput
          title="Passport Number"
          placeholder="Enter passport number"
          value={data.passport}
          onChangeText={(text) =>
            updateData(
              "passport",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="Driving License"
          placeholder="Enter DL number"
          value={data.dl}
          onChangeText={(text) =>
            updateData(
              "dl",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="Voter ID"
          placeholder="Enter voter ID"
          value={data.voterId}
          onChangeText={(text) =>
            updateData(
              "voterId",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="CKYC Number"
          placeholder="Enter CKYC"
          value={data.ckyc}
          onChangeText={(text) =>
            updateData(
              "ckyc",
              text
            )
          }
        />

        <AppDocumentUpload
          title="KYC Document"
          docTypeOptions={KYC_DOC_OPTIONS}
          docTypeValue={data.kycDocType}
          onDocTypeSelect={(value) => updateData("kycDocType", value)}
          frontImageUri={data.kycDocFrontUri}
          backImageUri={data.kycDocBackUri}
          onFrontImageSelected={(uri) => updateData("kycDocFrontUri", uri)}
          onBackImageSelected={(uri) => updateData("kycDocBackUri", uri)}
          onFrontImageRemoved={() => updateData("kycDocFrontUri", "")}
          onBackImageRemoved={() => updateData("kycDocBackUri", "")}
        />

      </View>

    </View>
  );
};

export default KYCDetails;
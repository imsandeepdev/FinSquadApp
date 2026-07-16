import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

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

      <View style={styles.card}>

        <AppTextInput
          title="PAN Number"
          placeholder="ABCDE1234F"
          maxLength={10}
          value={data.kycPan}
          onChangeText={(text) =>
            updateData(
              "kycPan",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="Aadhaar Number"
          placeholder="XXXX XXXX XXXX"
          keyboardType="numeric"
          maxLength={12}
          value={data.kycAadhaar}
          onChangeText={(text) =>
            updateData(
              "kycAadhaar",
              text
            )
          }
        />

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

      </View>

    </View>
  );
};

export default KYCDetails;
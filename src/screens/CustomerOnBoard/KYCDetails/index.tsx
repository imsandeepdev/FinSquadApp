import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { AppTextInput } from "../../../components";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const KYCDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        KYC Details
      </Text>

      {/* Status Card */}

      <View style={styles.statusCard}>

        <View style={styles.statusCircle} />

        <View style={{ flex: 1 }}>

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2144B5",
    marginBottom: 15,
  },

  statusCard: {
    backgroundColor: "#F3F8FF",

    borderRadius: 16,

    padding: 16,

    flexDirection: "row",

    alignItems: "center",

    marginBottom: 20,

    borderWidth: 1,

    borderColor: "#D9E7FF",
  },

  statusCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#F6AD55",
    marginRight: 12,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2144B5",
  },

  statusSub: {
    marginTop: 4,
    fontSize: 13,
    color: "#75849A",
  },

  pending: {
    color: "#F59E0B",
    fontWeight: "700",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",

    borderRadius: 18,

    padding: 16,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },
});
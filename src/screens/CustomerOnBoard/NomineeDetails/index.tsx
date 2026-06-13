import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AppTextInput } from "../../../components";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const NomineeDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  return (
    <View style={styles.container}>

      {/* NOMINEE */}

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Nominee Details
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <AppTextInput
          title="Nominee Name"
          placeholder="Enter nominee name"
          value={data.nomineeName}
          onChangeText={(text) =>
            updateData("nomineeName", text)
          }
        />

        <AppTextInput
          title="Relationship"
          placeholder="Father / Mother / Wife"
          value={data.nomineeRelation}
          onChangeText={(text) =>
            updateData("nomineeRelation", text)
          }
        />

        <AppTextInput
          title="Date of Birth"
          placeholder="DD/MM/YYYY"
          value={data.nomineeDob}
          onChangeText={(text) =>
            updateData("nomineeDob", text)
          }
        />

        <AppTextInput
          title="Mobile Number"
          placeholder="Enter mobile"
          keyboardType="phone-pad"
          maxLength={10}
          value={data.nomineeMobile}
          onChangeText={(text) =>
            updateData("nomineeMobile", text)
          }
        />

        <AppTextInput
          title="Aadhaar Number"
          placeholder="XXXX XXXX XXXX"
          keyboardType="numeric"
          maxLength={12}
          value={data.nomineeAadhaar}
          onChangeText={(text) =>
            updateData("nomineeAadhaar", text)
          }
        />

      </View>

      {/* CO APPLICANT */}

      <View style={styles.space} />

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Co-Applicant
        </Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: "#FFF4D8",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: "#B7791F",
              },
            ]}
          >
            Optional
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>
            + Add Co-Applicant
          </Text>
        </TouchableOpacity>

        <AppTextInput
          title="Name"
          placeholder="Enter name"
          value={data.coName}
          onChangeText={(text) =>
            updateData("coName", text)
          }
        />

        <AppTextInput
          title="Relationship"
          placeholder="Relationship"
          value={data.coRelation}
          onChangeText={(text) =>
            updateData("coRelation", text)
          }
        />

        <AppTextInput
          title="Date of Birth"
          placeholder="DD/MM/YYYY"
          value={data.coDob}
          onChangeText={(text) =>
            updateData("coDob", text)
          }
        />

        <AppTextInput
          title="PAN Number"
          placeholder="ABCDE1234F"
          maxLength={10}
          value={data.coPan}
          onChangeText={(text) =>
            updateData(
              "coPan",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="Mobile Number"
          placeholder="Enter mobile"
          keyboardType="phone-pad"
          maxLength={10}
          value={data.coMobile}
          onChangeText={(text) =>
            updateData("coMobile", text)
          }
        />

      </View>

    </View>
  );
};

export default NomineeDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2144B5",
  },

  badge: {
    backgroundColor: "#E8F8EC",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#2F855A",
    fontWeight: "600",
    fontSize: 12,
  },

  card: {
    backgroundColor: "#FFFFFF",
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

  space: {
    height: 25,
  },

  addButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F3F7FF",

    borderWidth: 1,
    borderColor: "#2144B5",
    borderStyle: "dashed",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15,
  },

  addText: {
    color: "#2144B5",
    fontWeight: "700",
    fontSize: 16,
  },
});
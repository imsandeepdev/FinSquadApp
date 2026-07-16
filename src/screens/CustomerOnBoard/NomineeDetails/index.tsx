import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const NomineeDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

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

        <View style={styles.badgeOptional}>
          <Text style={styles.badgeTextOptional}>
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
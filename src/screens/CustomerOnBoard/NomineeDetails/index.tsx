import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppTextInput, AppDatePicker, AppDropdown } from "../../../components";
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

const NomineeDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  // "Same as Nominee" — when checked, co-applicant's shared fields
  // (name, relationship, DOB, mobile) mirror the nominee's and are locked.
  const [sameAsNominee, setSameAsNominee] = useState(false);

  const applyNomineeToCoApplicant = () => {
    updateData("coName", data.nomineeName || "");
    updateData("coRelation", data.nomineeRelation || "");
    updateData("coDob", data.nomineeDob || "");
    updateData("coMobile", data.nomineeMobile || "");
  };

  const toggleSameAsNominee = () => {
    const next = !sameAsNominee;
    setSameAsNominee(next);
    if (next) applyNomineeToCoApplicant();
  };

  // Keep co-applicant fields in sync if the nominee's details are edited
  // afterwards, as long as the checkbox is still checked.
  useEffect(() => {
    if (sameAsNominee) applyNomineeToCoApplicant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.nomineeName, data.nomineeRelation, data.nomineeDob, data.nomineeMobile]);

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

        <AppDropdown
          title="Relationship"
          placeholder="Select relationship"
          value={data.nomineeRelation}
          options={RELATIONSHIP_OPTIONS}
          onSelect={(value) => updateData("nomineeRelation", value)}
        />

        <AppDatePicker
          title="Date of Birth"
          value={data.nomineeDob}
          onChange={(date) => updateData("nomineeDob", date)}
          maxDate={new Date()}
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

      <Pressable style={styles.sameAsRow} onPress={toggleSameAsNominee}>
        <View style={[styles.checkboxBox, sameAsNominee && styles.checkboxBoxChecked]}>
          {sameAsNominee && (
            <Ionicons name="checkmark" size={16} color={themeColor.white} />
          )}
        </View>
        <Text style={styles.sameAsLabel}>
          Nominee details same for Co-Applicant
        </Text>
      </Pressable>

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

        {/* <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>
            + Add Co-Applicant
          </Text>
        </TouchableOpacity> */}

        <AppTextInput
          title="Name"
          placeholder="Enter name"
          value={data.coName}
          onChangeText={(text) =>
            updateData("coName", text)
          }
          restInputTextProps={{ editable: !sameAsNominee }}
        />

        <AppDropdown
          title="Relationship"
          placeholder="Select relationship"
          value={data.coRelation}
          options={RELATIONSHIP_OPTIONS}
          onSelect={(value) => updateData("coRelation", value)}
          disabled={sameAsNominee}
        />

        <AppDatePicker
          title="Date of Birth"
          value={data.coDob}
          onChange={(date) => updateData("coDob", date)}
          maxDate={new Date()}
          disabled={sameAsNominee}
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
          restInputTextProps={{ editable: !sameAsNominee }}
          onChangeText={(text) =>
            updateData("coMobile", text)
          }
        />

      </View>

    </View>
  );
};

export default NomineeDetails;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppTextInput, AppDatePicker, AppDropdown } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { centres } from "../../CentreManagement/const";
import { AadhaarLookupResult } from "./mockAadhaarApi";
import AadhaarVerifyModal from "./AadhaarVerifyModal";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const GENDER_OPTIONS = ["Male", "Female", "Other"];
const AADHAAR_LENGTH = 12; // UIDAI Aadhaar numbers are always 12 digits (not 16)

const CustomerMaster: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [verifyModalVisible, setVerifyModalVisible] = useState(false);

  const isVerified = (data.aadhaar || "").length === AADHAAR_LENGTH;

  // Customer Master is always the 1st step of Customer On-Boarding — open
  // the Aadhaar verification modal as soon as the agent lands here, unless
  // this customer's Aadhaar has already been verified (e.g. navigating
  // back to this step after completing it).
  useEffect(() => {
    if (!isVerified) {
      setVerifyModalVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerified = (aadhaarNumber: string, result: AadhaarLookupResult) => {
    updateData("aadhaar", aadhaarNumber);
    updateData("fullName", result.name);
    updateData("dob", result.dob);
    updateData("gender", result.gender);
    updateData("address", result.address);
  };

  const maskedAadhaar = isVerified
    ? `XXXX XXXX ${data.aadhaar.slice(-4)}`
    : "";

  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        CUSTOMER MASTER
      </Text>

      <Pressable onPress={() => setVerifyModalVisible(true)} style={styles.verifyLinkRow}>
        <Ionicons
          name={isVerified ? "checkmark-circle" : "shield-checkmark-outline"}
          size={16}
          color={isVerified ? themeColor.successColor : themeColor.appColor}
        />
        <Text style={styles.verifyLinkText}>
          {isVerified ? `Aadhaar verified — ${maskedAadhaar}` : "Verify Aadhaar (Number / Biometric)"}
        </Text>
        {isVerified && (
          <Text style={styles.reVerifyText}>Re-verify</Text>
        )}
      </Pressable>

      {isVerified && (
        <View style={styles.fetchSuccessRow}>
          <Ionicons name="checkmark-circle" size={16} color={themeColor.successColor} />
          <Text style={styles.fetchSuccessText}>
            Name, DOB, gender and address auto-filled from Aadhaar. Review and edit if needed.
          </Text>
        </View>
      )}

      <AadhaarVerifyModal
        visible={verifyModalVisible}
        onClose={() => setVerifyModalVisible(false)}
        initialAadhaar={data.aadhaar}
        onVerified={handleVerified}
      />

      <AppTextInput
        title="Full Name"
        placeholder="Enter full name"
        value={data.fullName}
        onChangeText={text =>
          updateData("fullName", text)
        }
      />

      <AppDatePicker
        title="Date of Birth"
        value={data.dob}
        onChange={date => updateData("dob", date)}
        maxDate={new Date()}
      />

      <AppDropdown
        title="Gender"
        placeholder="Select gender"
        value={data.gender}
        options={GENDER_OPTIONS}
        onSelect={value => updateData("gender", value)}
      />

      <AppTextInput
        title="Address"
        placeholder="Enter address"
        value={data.address}
        onChangeText={text =>
          updateData("address", text)
        }
        restInputTextProps={{
          multiline: true,
          numberOfLines: 3,
        }}
      />

      <AppTextInput
        title="Mobile Number"
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        value={data.mobile}
        onChangeText={text =>
          updateData("mobile", text)
        }
      />

      <AppTextInput
        title="Email"
        placeholder="Enter email"
        keyboardType="email-address"
        value={data.email}
        onChangeText={text =>
          updateData("email", text)
        }
      />

      <AppTextInput
        title="PAN Number"
        placeholder="ABCDE1234F"
        autoCapitalize="characters"
        maxLength={10}
        value={data.pan}
        onChangeText={text =>
          updateData("pan", text.toUpperCase())
        }
      />

      <AppTextInput
        title="Occupation"
        placeholder="Enter occupation"
        value={data.occupation}
        onChangeText={text =>
          updateData("occupation", text)
        }
      />

      <AppTextInput
        title="Annual Income"
        placeholder="Enter annual income"
        keyboardType="numeric"
        value={data.income}
        onChangeText={text =>
          updateData("income", text)
        }
      />

      <AppDropdown
        title="Marital Status"
        placeholder="Select marital status"
        value={data.maritalStatus}
        options={["Single", "Married", "Widowed", "Divorced"]}
        onSelect={value => updateData("maritalStatus", value)}
      />

      <Text style={styles.fieldLabel}>Linked Centre</Text>
      <View style={styles.centreChipRow}>
        {centres.map(centre => {
          const active = data.centreCode === centre.code;
          return (
            <Pressable
              key={centre.code}
              onPress={() => updateData("centreCode", centre.code)}
              style={[styles.centreChip, active && styles.centreChipActive]}
            >
              <Text
                style={[
                  styles.centreChipText,
                  active && styles.centreChipTextActive,
                ]}
              >
                {centre.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
};

export default CustomerMaster;

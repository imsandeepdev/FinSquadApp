import React, { useEffect, useRef, useState } from "react";
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
import { fetchAadhaarDetails } from "./mockAadhaarApi";

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

  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [fetched, setFetched] = useState(false);

  // Tracks which Aadhaar number we've already auto-fetched, so we don't
  // re-trigger the "API call" repeatedly for the same completed number.
  const autoFetchedFor = useRef<string>("");

  const runFetch = (aadhaarNumber: string) => {
    setFetching(true);
    setFetchError("");

    fetchAadhaarDetails(aadhaarNumber)
      .then(result => {
        // Map whatever the (mock) API returned onto the form.
        updateData("fullName", result.name);
        updateData("dob", result.dob);
        updateData("gender", result.gender);
        updateData("address", result.address);
        setFetched(true);
      })
      .catch((err: Error) => {
        setFetched(false);
        setFetchError(err.message);
      })
      .finally(() => setFetching(false));
  };

  const handleAadhaarChange = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "").slice(0, AADHAAR_LENGTH);
    updateData("aadhaar", digitsOnly);

    // Stale result / error should not linger once the number is edited again.
    if (fetched) setFetched(false);
    if (fetchError) setFetchError("");
    if (digitsOnly.length < AADHAAR_LENGTH) autoFetchedFor.current = "";
  };

  // Auto-fetch as soon as a full 12-digit Aadhaar number is entered —
  // no need to tap a button. The manual button on the field still works
  // too, e.g. to retry after a "not found" error.
  useEffect(() => {
    const aadhaar = data.aadhaar || "";
    if (
      aadhaar.length === AADHAAR_LENGTH &&
      !fetching &&
      autoFetchedFor.current !== aadhaar
    ) {
      autoFetchedFor.current = aadhaar;
      runFetch(aadhaar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.aadhaar]);

  const handleManualFetch = () => {
    const aadhaar = data.aadhaar || "";
    if (aadhaar.length !== AADHAAR_LENGTH) {
      setFetchError(`Enter a valid ${AADHAAR_LENGTH}-digit Aadhaar number`);
      return;
    }
    autoFetchedFor.current = aadhaar;
    runFetch(aadhaar);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        CUSTOMER MASTER
      </Text>

      <AppTextInput
        title="Aadhaar Number"
        placeholder="XXXX XXXX XXXX"
        keyboardType="numeric"
        maxLength={AADHAAR_LENGTH}
        value={data.aadhaar}
        onChangeText={handleAadhaarChange}
        leftIcon="finger-print-outline"
        rightIcon="cloud-download-outline"
        rightOnPress={handleManualFetch}
        rightLoading={fetching}
        isError={!!fetchError}
        errorMessage={fetchError}
      />

      {fetching && (
        <Text style={styles.fetchStatusText}>
          Fetching details from Aadhaar…
        </Text>
      )}

      {fetched && !fetching && (
        <View style={styles.fetchSuccessRow}>
          <Ionicons name="checkmark-circle" size={16} color={themeColor.successColor} />
          <Text style={styles.fetchSuccessText}>
            Name, DOB, gender and address auto-filled from Aadhaar. Review and edit if needed.
          </Text>
        </View>
      )}

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

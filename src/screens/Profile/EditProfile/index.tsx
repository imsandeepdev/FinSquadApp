import React, { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppHeader, AppTextInput, StoryScreen } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { AGENT_PROFILE } from "../const";
import { getStyles } from "./styles";

const EditProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [fullName, setFullName] = useState(AGENT_PROFILE.name);
  const [mobile, setMobile] = useState(AGENT_PROFILE.mobile);
  const [email, setEmail] = useState(AGENT_PROFILE.email);

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    let valid = true;

    if (!fullName.trim()) {
      setNameError("Full name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    const digitsOnly = mobile.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setMobileError("Enter a valid 10-digit mobile number.");
      valid = false;
    } else {
      setMobileError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  };

  const onSave = () => {
    if (!validate()) return;

    Alert.alert(
      "Profile updated",
      "Your profile details have been saved.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Edit Profile"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.avatarSection}>
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: AGENT_PROFILE.avatarUri }}
              style={styles.avatarImage}
            />
            <View style={styles.avatarEditBadge}>
              <Ionicons name="camera" size={13} color={themeColor.white} />
            </View>
          </View>
          <Text style={styles.avatarHint}>
            Tap the icon to change your photo
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Personal Details
          </Text>

          <AppTextInput
            title="Full Name"
            placeholder="Enter full name"
            leftIcon="person-outline"
            value={fullName}
            onChangeText={setFullName}
            isError={!!nameError}
            errorMessage={nameError}
          />

          <AppTextInput
            title="Mobile Number"
            placeholder="Enter mobile number"
            leftIcon="call-outline"
            keyboardType="phone-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
            isError={!!mobileError}
            errorMessage={mobileError}
          />

          <AppTextInput
            title="Email Address"
            placeholder="Enter email address"
            leftIcon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            isError={!!emailError}
            errorMessage={emailError}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Work Details
          </Text>

          <View style={styles.readOnlyRow}>
            <Text style={styles.readOnlyLabel}>Employee ID</Text>
            <View style={styles.readOnlyValueRow}>
              <Text style={styles.readOnlyValue}>{AGENT_PROFILE.employeeId}</Text>
              <Ionicons name="lock-closed" size={13} color={themeColor.placeHolder} />
            </View>
          </View>

          <View style={styles.readOnlyDivider} />

          <View style={styles.readOnlyRow}>
            <Text style={styles.readOnlyLabel}>Branch</Text>
            <View style={styles.readOnlyValueRow}>
              <Text style={styles.readOnlyValue}>{AGENT_PROFILE.branch}</Text>
              <Ionicons name="lock-closed" size={13} color={themeColor.placeHolder} />
            </View>
          </View>

          <View style={styles.readOnlyDivider} />

          <View style={styles.readOnlyRow}>
            <Text style={styles.readOnlyLabel}>Region</Text>
            <View style={styles.readOnlyValueRow}>
              <Text style={styles.readOnlyValue}>{AGENT_PROFILE.region}</Text>
              <Ionicons name="lock-closed" size={13} color={themeColor.placeHolder} />
            </View>
          </View>

          <Text style={styles.readOnlyHint}>
            These details are managed by your branch admin and can't be edited here.
          </Text>
        </View>

        <AppButton
          title="Save Changes"
          onPress={onSave}
          containerStyle={styles.saveButton}
        />

      </ScrollView>
    </StoryScreen>
  );
};

export default EditProfileScreen;

import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppHeader, AppTextInput, StoryScreen } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

const MIN_LENGTH = 6;

const ChangePasswordScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [currentError, setCurrentError] = useState("");
  const [newError, setNewError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const hasMinLength = newPassword.length >= MIN_LENGTH;
  const isDifferentFromCurrent = !!newPassword && newPassword !== currentPassword;

  const validate = () => {
    let valid = true;

    if (!currentPassword) {
      setCurrentError("Enter your current password.");
      valid = false;
    } else {
      setCurrentError("");
    }

    if (!hasMinLength) {
      setNewError(`New password must be at least ${MIN_LENGTH} characters.`);
      valid = false;
    } else if (currentPassword && newPassword === currentPassword) {
      setNewError("New password must be different from the current password.");
      valid = false;
    } else {
      setNewError("");
    }

    if (confirmPassword !== newPassword) {
      setConfirmError("Passwords do not match.");
      valid = false;
    } else {
      setConfirmError("");
    }

    return valid;
  };

  const onSave = () => {
    if (!validate()) return;

    Alert.alert(
      "Password updated",
      "Your password has been changed successfully. Please use your new password the next time you log in.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Change Password"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.infoBanner}>
          <Ionicons name="lock-closed-outline" size={16} color={themeColor.appColor} />
          <Text style={styles.infoBannerText}>
            Choose a strong password you haven't used before. You'll need to log in again on your other devices after changing it.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Update Password
          </Text>

          <AppTextInput
            title="Current Password"
            placeholder="Enter current password"
            leftIcon="lock-closed-outline"
            rightIcon={showCurrent ? "eye-off-outline" : "eye-outline"}
            rightOnPress={() => setShowCurrent((prev) => !prev)}
            secureTextEntry={!showCurrent}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            isError={!!currentError}
            errorMessage={currentError}
          />

          <AppTextInput
            title="New Password"
            placeholder="Enter new password"
            leftIcon="key-outline"
            rightIcon={showNew ? "eye-off-outline" : "eye-outline"}
            rightOnPress={() => setShowNew((prev) => !prev)}
            secureTextEntry={!showNew}
            value={newPassword}
            onChangeText={setNewPassword}
            isError={!!newError}
            errorMessage={newError}
          />

          <View style={styles.ruleRow}>
            <Ionicons
              name={hasMinLength ? "checkmark-circle" : "ellipse-outline"}
              size={13}
              color={hasMinLength ? themeColor.successColor : themeColor.placeHolder}
            />
            <Text style={[styles.ruleText, hasMinLength && styles.ruleTextMet]}>
              At least {MIN_LENGTH} characters
            </Text>
          </View>

          <View style={styles.ruleRow}>
            <Ionicons
              name={isDifferentFromCurrent ? "checkmark-circle" : "ellipse-outline"}
              size={13}
              color={isDifferentFromCurrent ? themeColor.successColor : themeColor.placeHolder}
            />
            <Text style={[styles.ruleText, isDifferentFromCurrent && styles.ruleTextMet]}>
              Different from current password
            </Text>
          </View>

          <AppTextInput
            title="Confirm New Password"
            placeholder="Re-enter new password"
            leftIcon="key-outline"
            rightIcon={showConfirm ? "eye-off-outline" : "eye-outline"}
            rightOnPress={() => setShowConfirm((prev) => !prev)}
            secureTextEntry={!showConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isError={!!confirmError}
            errorMessage={confirmError}
          />
        </View>

        <AppButton
          title="Update Password"
          onPress={onSave}
          containerStyle={styles.saveButton}
        />

      </ScrollView>
    </StoryScreen>
  );
};

export default ChangePasswordScreen;

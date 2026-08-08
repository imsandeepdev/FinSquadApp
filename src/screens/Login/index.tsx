import React, { useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { AppButton, AppTextInput, StoryScreen } from "../../components";
import { getStyles } from './styles';
import { useTheme } from "../../utils/provider/themeProvider";
import { useRole, UserRole } from "../../utils/provider/roleProvider";
import {useNavigation} from '@react-navigation/native';

const ROLE_OPTIONS: { id: UserRole; label: string; icon: string }[] = [
  { id: "FIELD_OFFICER", label: "Field Officer", icon: "walk-outline" },
  { id: "CREDIT_OFFICER", label: "Credit Officer", icon: "shield-checkmark-outline" },
  { id: "BRANCH_MANAGER", label: "Branch Manager", icon: "business-outline" },
];

const Login = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { setRole } = useRole();
  const usernameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const [selectedRole, setSelectedRole] = useState<UserRole>("FIELD_OFFICER");

  // FORM STATE
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // ERROR STATE
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (key: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [key]: "",
    }));
  };

  // VALIDATION (FINTECH LEVEL)
  const validate = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    const userValid = /^[0-9]{10}$/;

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (
      !userValid.test(form.username)
    ) {
      newErrors.username =
        "Enter valid username / mobile number";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // LOGIN HANDLER
  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      console.log("Login Request:", form);

      // simulate API call
      setTimeout(() => {
        setLoading(false);
        console.log("Login Success");
        setRole(selectedRole);
         navigation.replace('MainApp');

        // TODO:
        // store token
      }, 1500);

    } catch (error) {
      setLoading(false);
      console.log("Login failed");
    }
  };

  return (
    <StoryScreen>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.bodyContainer}>
            {/* HEADER */}
            <View style={styles.cardViewTopContainer}>
              <View style={styles.brandBadge}>
                <Ionicons
                  name="shield-checkmark"
                  size={28}
                  color={themeColor.lightWhite}
                />
              </View>

              <Text style={styles.cardViewTopTitleText}>
                Welcome Back
              </Text>
              <Text style={styles.cardViewTopSubTitleText}>
                Secure Banking Login
              </Text>
            </View>

            {/* LOGIN CARD */}
            <View style={styles.cardView}>
              <Text style={styles.title}>Sign in</Text>
              <Text style={styles.subtitle}>
                Enter your credentials to continue
              </Text>

              {/* USERNAME */}
              <AppTextInput
                ref={usernameRef}
                title="Username / Mobile No"
                value={form.username}
                onChangeText={(text: string) =>
                  handleChange("username", text)
                }
                leftIcon="person-circle-outline"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
                isError={!!errors.username}
                errorMessage={errors.username}
              />

              {/* PASSWORD */}
              <AppTextInput
                ref={passwordRef}
                title="Password"
                value={form.password}
                onChangeText={(text: string) =>
                  handleChange("password", text)
                }
                secureTextEntry={!showPassword}
                leftIcon="lock-closed-outline"
                rightIcon={showPassword ? "eye" : "eye-off"}
                rightOnPress={() =>
                  setShowPassword(!showPassword)
                }
                returnKeyType="done"
                isError={!!errors.password}
                errorMessage={errors.password}
              />

              {/* REMEMBER ME + FORGOT PASSWORD */}
              <View style={styles.rememberMeRow}>
                <Pressable
                  style={styles.rememberMePressable}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe && styles.checkboxChecked,
                    ]}
                  >
                    {rememberMe && (
                      <Ionicons name="checkmark" size={12} color={themeColor.lightWhite} />
                    )}
                  </View>
                  <Text style={styles.rememberMeText}>
                    Remember Me
                  </Text>
                </Pressable>

                <Pressable onPress={() => console.log("Reset password")}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </Pressable>
              </View>

              {/* ROLE SELECTION */}
              <Text style={styles.roleLabel}>
                Sign in as
              </Text>

              <View style={styles.roleRow}>
                {ROLE_OPTIONS.map((option, index) => {
                  const active = option.id === selectedRole;
                  const isLast = index === ROLE_OPTIONS.length - 1;
                  return (
                    <Pressable
                      key={option.id}
                      style={[
                        styles.roleCard,
                        active && styles.roleCardActive,
                        isLast && styles.roleCardLast,
                      ]}
                      onPress={() => setSelectedRole(option.id)}
                    >
                      <View style={styles.roleCardIconWrap}>
                        <Ionicons
                          name={option.icon}
                          size={16}
                          color={active ? themeColor.appColor : themeColor.placeHolder}
                        />
                      </View>

                      <Text
                        style={[styles.roleCardText, active && styles.roleCardTextActive]}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {/* LOGIN BUTTON */}
              <View style={styles.loginButtonContainer}>
                <AppButton
                  onPress={handleLogin}
                  title={
                    loading ? "Signing in..." : "Sign in"
                  }
                  disabled={loading}
                  containerStyle={[
                    styles.loginButton,
                    { opacity: loading ? 0.6 : 1 },
                  ]}
                />
              </View>

              <View style={styles.registerRowView}>
                <Text style={styles.registerText}>
                  {"Don't have an Account?"}
                </Text>

                <Pressable onPress={()=>{ navigation.replace('Register')}} style={styles.registerButton}>
                  <Text style={styles.registerButtonText}>
                    {'Sign Up'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
   </StoryScreen>
  );
};

export default Login;

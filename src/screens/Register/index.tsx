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

import { AppButton, AppTextInput, ResetPasswordFooter, StoryScreen } from "../../components";
import { getStyles } from './styles';
import { useTheme } from "../../utils/provider/themeProvider";
import { responsiveSize } from "../../res";
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const usernameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const mobileRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);


  // FORM STATE
  const [form, setForm] = useState({
    username: "",
    password: "",
    mobile: "",
    email: "",
  });

  // ERROR STATE
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    mobile: "",
    email: "",
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
    let newErrors = { username: "", password: "", mobile: "", email: "" };

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (
      !phoneRegex.test(form.username) &&
      !emailRegex.test(form.username)
    ) {
      newErrors.username =
        "Enter valid email or 10-digit mobile number";
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
         navigation.replace('AIWealthCoachScreen');

        // TODO:
        // store token
        // navigate to dashboard
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
          contentContainerStyle={{ flexGrow: 1 , backgroundColor: themeColor.appColor}}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              flex: 1,
              marginTop: responsiveSize(20),
            
            }}
          >
            {/* HEADER */}
            <View style={styles.cardViewTopContainer}>
              <Text style={styles.cardViewTopTitleText}>
                Welcome to Fin Squad
              </Text>
              <Text style={styles.cardViewTopSubTitleText}>
                {'Please provide following details \nfor your new account'}
              </Text>
            </View>

            {/* REGISTER CARD */}
            <View style={styles.cardView}>
              <Text style={styles.title}>Register</Text>

              {/* USERNAME */}
              <AppTextInput
                ref={usernameRef}
                title="Username"
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  mobileRef.current?.focus();
                }}
                isError={!!errors.password}
                errorMessage={errors.password}
              />

                <AppTextInput
                ref={mobileRef}
                title="Mobile Number"
                value={form.mobile}
                onChangeText={(text: string) =>
                  handleChange("mobile", text)
                }
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailRef.current?.focus();
                }}
                isError={!!errors.mobile}
                errorMessage={errors.mobile}
              />

                <AppTextInput
                ref={emailRef}
                title="Email"
                value={form.email}
                onChangeText={(text: string) =>
                  handleChange("email", text)
                }
                rightOnPress={() =>
                  setShowPassword(!showPassword)
                }
                returnKeyType="done"
                isError={!!errors.email}
                errorMessage={errors.email}
              />              
              {/* REMEMBER ME */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Pressable
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <Text style={{ color: themeColor.primaryText }}>
                    {rememberMe
                      ? "☑ Accept Terms & Conditions"
                      : "☐ Accept Terms & Conditions"}
                  </Text>
                </Pressable>
              </View>

              {/* LOGIN BUTTON */}
              <View style={{ marginTop: responsiveSize(20) }}>
                <AppButton
                  onPress={handleLogin}
                  title={
                    loading ? "Registering..." : "Register My Device"
                  }
                  disabled={loading}
                  containerStyle={{
                    opacity: loading ? 0.6 : 1,
                    marginHorizontal:0
                  }}
                />
              </View>

              {/* FOOTER */}
              <View style={styles.resetBottomContainer}>
                <ResetPasswordFooter
                title="Already have an account?"
                buttonTitle="Login"
                onResetPress={() => navigation.replace('Login')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
   </StoryScreen>
  );
};

export default Register;
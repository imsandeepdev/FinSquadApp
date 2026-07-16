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
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const usernameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

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
         navigation.replace('Dashboard');

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
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.bodyContainer}>
            {/* HEADER */}
            <View style={styles.cardViewTopContainer}>
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

              {/* REMEMBER ME */}
              <View style={styles.rememberMeRow}>
                <Pressable
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <Text style={styles.rememberMeText}>
                    {rememberMe
                      ? "☑ Remember Me"
                      : "☐ Remember Me"}
                  </Text>
                </Pressable>
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

              <View>
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

              {/* FOOTER */}
              <View style={styles.resetBottomContainer}>
                <ResetPasswordFooter
                onResetPress={() => console.log("Reset password")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
   </StoryScreen>
  );
};

export default Login;
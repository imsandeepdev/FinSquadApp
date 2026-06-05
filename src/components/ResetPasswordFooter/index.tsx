import React from "react";
import { View, Text, Pressable } from "react-native";
import getStyles from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";

type Props = {
  title?: string;
  buttonTitle?: string;
  onResetPress: () => void;
};

const ResetPasswordFooter = ({ title, buttonTitle, onResetPress }: Props) => {
    const { theme: { themeColor } } = useTheme();
    const styles = getStyles(themeColor);

  return (
    <View style={styles.resetBottomContainer}>
      <View style={styles.resetBottomLine} />

      <View style={styles.resetBottomRowView}>
        <Text style={styles.forgotPasswordText}>
          {title || "Forgot your password?"}
        </Text>

        <Pressable 
        style={styles.resetPasswordButton}
        onPress={onResetPress}>
          <Text style={styles.resetPasswordButtonText}>
            {buttonTitle || "Reset"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPasswordFooter;
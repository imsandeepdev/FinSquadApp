import React from "react";
import { View, Text, Pressable } from "react-native";
import getStyles from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";

type Props = {
  onResetPress: () => void;
};

const ResetPasswordFooter = ({  onResetPress }: Props) => {
    const { theme: { themeColor } } = useTheme();
    const styles = getStyles(themeColor);

  return (
    <View style={styles.resetBottomContainer}>
      <View style={styles.resetBottomLine} />

      <View style={styles.resetBottomRowView}>
        <Text style={styles.forgotPasswordText}>
          Forgot your password?
        </Text>

        <Pressable onPress={onResetPress}>
          <Text style={styles.resetPasswordButtonText}>
            Reset
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPasswordFooter;
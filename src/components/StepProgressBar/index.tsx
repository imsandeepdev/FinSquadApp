import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { getStyles } from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";

interface Props {
  currentStep: number;
  totalSteps: number;
}

const StepProgressBar: React.FC<Props> = ({
  currentStep,
  totalSteps,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  return (
    <View style={styles.container}>
      {[...Array(totalSteps)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.item,
            {
              backgroundColor:
                index < currentStep
                  ? themeColor.appColor
                  : themeColor.appLightColor,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default StepProgressBar;


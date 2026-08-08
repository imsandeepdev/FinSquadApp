import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

interface Props {
  status: "ACTIVE" | "INACTIVE";
}

const StatusBadge = ({ status }: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const active = status === "ACTIVE";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: active ? "#DCFCE7" : "#FEE2E2",
        },
      ]}>
      <View
        style={[
          styles.dot,
          {
            backgroundColor: active ? themeColor.successColor : themeColor.errorColor,
          },
        ]}
      />

      <Text
        style={[
          styles.text,
          {
            color: active ? themeColor.successColor : themeColor.errorColor,
          },
        ]}>
        {active ? "Active" : "Inactive"}
      </Text>
    </View>
  );
};

export default React.memo(StatusBadge);
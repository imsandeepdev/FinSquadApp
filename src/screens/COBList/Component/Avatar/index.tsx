import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

interface Props {
  name: string;
}

const avatarColors = [
  "#D1FAE5",
  "#DBEAFE",
  "#FCE7F3",
  "#FEF3C7",
  "#EDE9FE",
  "#FEE2E2",
];

const textColors = [
  "#059669",
  "#2563EB",
  "#DB2777",
  "#D97706",
  "#7C3AED",
  "#DC2626",
];

const Avatar = ({ name }: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const initials = name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const index = name.length % avatarColors.length;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: avatarColors[index],
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: textColors[index],
          },
        ]}>
        {initials}
      </Text>
    </View>
  );
};

export default React.memo(Avatar);
import React from "react";
import { View, Text, StyleSheet } from "react-native";


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

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
  },
});
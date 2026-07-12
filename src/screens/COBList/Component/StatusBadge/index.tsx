import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppColor } from "../../../../res";

interface Props {
  status: "ACTIVE" | "INACTIVE";
}

const StatusBadge = ({ status }: Props) => {
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
            backgroundColor: active ? AppColor.successColor : AppColor.errorColor,
          },
        ]}
      />

      <Text
        style={[
          styles.text,
          {
            color: active ? AppColor.successColor : AppColor.errorColor,
          },
        ]}>
        {active ? "Active" : "Inactive"}
      </Text>
    </View>
  );
};

export default React.memo(StatusBadge);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 5,
  },

  text: {
    fontWeight: "600",
    fontSize: 12,
  },
});
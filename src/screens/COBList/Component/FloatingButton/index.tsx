import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColor } from "../../../../res";

interface Props {
  onPress: () => void;
}

const FloatingButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <Ionicons name="add" size={20} color="#FFF" />

      <Text style={styles.text}>Add Customer</Text>
    </TouchableOpacity>
  );
};

export default React.memo(FloatingButton);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 75,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColor.appColor,
    paddingHorizontal: 12,
    height: 45,
    borderRadius: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  text: {
    color: "#FFF",
    marginLeft: 4,
    fontWeight: "700",
    fontSize: 12,
  },
});
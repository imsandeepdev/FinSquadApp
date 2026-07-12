import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import Avatar from "../Avatar/index"
import StatusBadge from "../StatusBadge/index";
import { AppColor } from "../../../../res";
import { Customer } from "../../types";

interface Props {
  item: Customer;
  onPress?: () => void;
  onMenuPress?: () => void;
}

const CustomerCard = ({
  item,
  onPress,
  onMenuPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}>
      {/* Left Avatar */}

      <Avatar name={item.name} />

      {/* Middle */}

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.code}>{item.code}</Text>

        <View style={styles.row}>
          <Ionicons
            name="call-outline"
            size={14}
            color={AppColor.secAppColor}
          />
          <Text style={styles.mobile}>{item.mobile}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={14}
            color={AppColor.secAppColor}
          />
          <Text style={styles.village}>
            {item.village}
          </Text>
        </View>
      </View>

      {/* Right */}

      <View style={styles.rightSection}>
        <StatusBadge status={item.status} />

        <TouchableOpacity
          onPress={onMenuPress}
          style={styles.menuButton}>
          <Ionicons
            name="ellipsis-vertical"
            size={18}
            color={AppColor.secAppText}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CustomerCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColor.white,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 15,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  infoContainer: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
    color: AppColor.primaryText,
  },

  code: {
    marginTop: 2,
    fontSize: 12,
    color: AppColor.primaryLightText,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  mobile: {
    marginLeft: 5,
    fontSize: 12,
    color: AppColor.primaryLightText,
  },

  village: {
    marginLeft: 5,
    fontSize: 12,
    color: AppColor.primaryLightText,
  },

  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 80,
  },

  menuButton: {
    padding: 4,
  },
});
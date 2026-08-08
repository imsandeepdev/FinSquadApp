import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import Avatar from "../Avatar/index"
import StatusBadge from "../StatusBadge/index";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";
import { Customer } from "../../types";

interface Props {
  item: Customer;
  onPress?: () => void;
  onMenuPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomerCard = ({
  item,
  onPress,
  onMenuPress,
  style,
}: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.card, style]}>
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
            color={themeColor.secAppColor}
          />
          <Text style={styles.mobile}>{item.mobile}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={14}
            color={themeColor.secAppColor}
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
            color={themeColor.secAppText}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CustomerCard);
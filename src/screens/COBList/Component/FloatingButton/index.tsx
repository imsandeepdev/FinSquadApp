import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

interface Props {
  onPress: () => void;
}

const FloatingButton = ({ onPress }: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <Ionicons name="add" size={20} color={themeColor.white} />

      <Text style={styles.text}>Add Customer</Text>
    </TouchableOpacity>
  );
};

export default React.memo(FloatingButton);
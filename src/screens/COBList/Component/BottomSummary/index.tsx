import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../../utils/provider/themeProvider";
import getStyles from "./styles";

interface Props {
  total: number;
  active: number;
  inactive: number;
}

const SummaryItem = ({
  icon,
  color,
  value,
  title,
}: {
  icon: string;
  color: string;
  value: number;
  title: string;
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.item}>
      <View style={[styles.iconContainer, { backgroundColor: color + "20" }]}>
        <Ionicons name={icon} size={14} color={color} />
      </View>
      <View style={styles.summaryTextWrap}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const BottomSummary = ({
  total,
  active,
  inactive,
}: Props) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>
      <SummaryItem
        icon="people"
        color={themeColor.appColor}
        value={total}
        title="Total"
      />
      <View style={styles.divider}/>

      <SummaryItem
        icon="checkmark-circle"
        color={themeColor.successColor}
        value={active}
        title="Active"
      />
      <View style={styles.divider}/>

      <SummaryItem
        icon="close-circle"
        color={themeColor.errorColor}
        value={inactive}
        title="Inactive"
      />
    </View>
  );
};

export default React.memo(BottomSummary);
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { LoanTypeOption } from "../../types";

interface Props {
  item: LoanTypeOption;
  onPress: () => void;
}

const LoanTypeCard: React.FC<Props> = ({ item, onPress }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.headerRow}>
        <View style={[styles.iconChip, { backgroundColor: item.accent.bg }]}>
          <Ionicons name={item.icon} size={20} color={item.accent.text} />
        </View>

        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        <Ionicons
          name="chevron-forward"
          size={18}
          color={themeColor.placeHolder}
          style={styles.chevron}
        />
      </View>

      <Text style={styles.amountText}>
        {item.amountRange}
      </Text>

      {item.rateTenure ? (
        <Text style={styles.rateText}>
          {item.rateTenure}
        </Text>
      ) : null}

      {item.badgeText ? (
        <View
          style={[
            styles.badge,
            { backgroundColor: item.accent.bg, borderColor: item.accent.border },
          ]}
        >
          {item.badgeIcon ? (
            <Ionicons name={item.badgeIcon} size={12} color={item.accent.text} />
          ) : null}

          <Text style={[styles.badgeText, { color: item.accent.text }]}>
            {item.badgeText}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(LoanTypeCard);

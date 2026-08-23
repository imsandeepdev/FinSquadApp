import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

export interface SummarySheetProps {
  visible: boolean;
  onClose: () => void;
  totalCustomers: number;
  activeCustomers: number;
  totalCentres: number;
}

const SummarySheet: React.FC<SummarySheetProps> = ({
  visible,
  onClose,
  totalCustomers,
  activeCustomers,
  totalCentres,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <View style={styles.grabber} />

        <View style={styles.header}>
          <View style={styles.headerTitleWrap}>
            <Text style={styles.headerTitle}>Overview</Text>
            <Text style={styles.headerSubtitle}>
              Your onboarded customers & centres
            </Text>
          </View>

          <Pressable style={styles.closeButton} onPress={onClose} hitSlop={10}>
            <Ionicons name="close" size={18} color={themeColor.primaryText} />
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={[styles.statIconWrap, { backgroundColor: themeColor.appColor + "1A" }]}>
              <Ionicons name="people-outline" size={18} color={themeColor.appColor} />
            </View>
            <Text style={styles.statValue}>{totalCustomers}</Text>
            <Text style={styles.statLabel}>Total Clients</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconWrap, { backgroundColor: themeColor.successColor + "1A" }]}>
              <Ionicons name="checkmark-circle-outline" size={18} color={themeColor.successColor} />
            </View>
            <Text style={styles.statValue}>{activeCustomers}</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>

          <View style={[styles.statCard, styles.statCardLast]}>
            <View style={[styles.statIconWrap, { backgroundColor: themeColor.secAppColor + "1A" }]}>
              <Ionicons name="business-outline" size={18} color={themeColor.secAppColor} />
            </View>
            <Text style={styles.statValue}>{totalCentres}</Text>
            <Text style={styles.statLabel}>Centres</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SummarySheet;

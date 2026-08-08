import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      paddingHorizontal: responsiveSize(15),
      paddingBottom: responsiveSize(40),
    },

    headerRow: {
      marginVertical: responsiveSize(10),
    },

    screenTitle: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    screenSubtitle: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
    },

    summaryRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(14),
    },

    summaryCard: {
      flex: 1,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(12),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      paddingVertical: responsiveSize(10),
      alignItems: "center",
      marginRight: responsiveSize(8),
    },

    summaryCardLast: {
      marginRight: 0,
    },

    summaryValue: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    summaryLabel: {
      fontSize: responsiveSize(10.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
      textAlign: "center",
    },

    viewToggleRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(12),
    },

    viewToggleChip: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(9),
      borderRadius: responsiveSize(10),
      borderWidth: 1.5,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(8),
    },

    viewToggleChipActive: {
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.secLightAppColor,
    },

    viewToggleChipText: {
      fontSize: responsiveSize(12.5),
      fontWeight: "700",
      color: themeColor.primaryText,
      marginLeft: responsiveSize(6),
    },

    viewToggleChipTextActive: {
      color: themeColor.appColor,
    },

    customerCardSpacing: {
      marginHorizontal: 0,
    },

    emptyWrap: {
      alignItems: "center",
      paddingVertical: responsiveSize(40),
    },

    emptyTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.primaryText,
      marginTop: responsiveSize(10),
    },

    emptySubtitle: {
      fontSize: responsiveSize(12.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
      textAlign: "center",
    },

    // ---- Centre card ----
    centreCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(14),
      marginBottom: responsiveSize(12),
    },

    centreHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    centreNameWrap: {
      flex: 1,
      marginRight: responsiveSize(8),
    },

    centreName: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    centreVillageRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(3),
    },

    centreVillageText: {
      marginLeft: responsiveSize(4),
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
    },

    centreStatusBadge: {
      paddingHorizontal: responsiveSize(9),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(10),
    },

    centreStatusText: {
      fontSize: responsiveSize(10),
      fontWeight: "800",
    },

    centreStatsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: responsiveSize(12),
    },

    centreStatLabel: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
    },

    centreStatValue: {
      fontSize: responsiveSize(11.5),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    healthBarBg: {
      height: responsiveSize(6),
      borderRadius: responsiveSize(3),
      backgroundColor: themeColor.background,
      marginTop: responsiveSize(8),
      overflow: "hidden",
    },

    healthBarFill: {
      height: "100%",
      borderRadius: responsiveSize(3),
    },

    centreMeetingRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(10),
    },

    centreMeetingText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(11.5),
      color: themeColor.secondaryLightText,
    },
  });

export default getStyles;

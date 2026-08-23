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
      paddingTop: responsiveSize(4),
      paddingBottom: responsiveSize(40),
    },

    searchWrap: {
      marginBottom: responsiveSize(4),
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

    // Floating circular button, bottom-right, above the bottom tab bar —
    // opens the summary stats (Total Clients / Active / Centres) as a
    // bottom sheet instead of showing them inline at the top.
    summaryFab: {
      position: "absolute",
      right: responsiveSize(18),
      bottom: responsiveSize(95),
      width: responsiveSize(52),
      height: responsiveSize(52),
      borderRadius: responsiveSize(26),
      backgroundColor: themeColor.appColor,
      alignItems: "center",
      justifyContent: "center",
      elevation: 8,
      shadowColor: themeColor.black,
      shadowOpacity: 0.25,
      shadowRadius: responsiveSize(10),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },
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
      paddingVertical: responsiveSize(10),
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
      borderRadius: responsiveSize(16),
      padding: responsiveSize(16),
      marginBottom: responsiveSize(14),
      // Proper elevated card — shadow instead of a flat border.
      elevation: 4,
      shadowColor: themeColor.black,
      shadowOpacity: 0.1,
      shadowRadius: responsiveSize(10),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },
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
      // Was secondaryLightText — near-invisible (~1.4:1 contrast) on a
      // light card background.
      color: themeColor.placeHolder,
    },
  });

export default getStyles;

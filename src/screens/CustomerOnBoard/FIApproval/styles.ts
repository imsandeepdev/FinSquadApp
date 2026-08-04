import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(18),
    },

    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    title: {
      fontSize: appSize.font_Large,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    badge: {
      backgroundColor: themeColor.secLightAppColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    badgeText: {
      color: themeColor.successColor,
      fontWeight: "600",
      fontSize: responsiveSize(12),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(15),

      shadowColor: themeColor.black,
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },

      elevation: 3,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      marginBottom: responsiveSize(16),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(10),
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(6),
    },

    rowLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
    },

    rowValue: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    statusBanner: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: responsiveSize(12),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(16),
    },

    statusBannerText: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "600",
      marginLeft: responsiveSize(10),
    },

    statusBadgePill: {
      alignSelf: "flex-start",
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(20),
      marginBottom: responsiveSize(4),
    },

    statusBadgePillText: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
    },

    actionRow: {
      flexDirection: "row",
      marginTop: responsiveSize(4),
    },

    approveButton: {
      flex: 1,
      marginHorizontal: 0,
      marginRight: responsiveSize(8),
    },

    rejectButton: {
      flex: 1,
      marginHorizontal: 0,
      backgroundColor: themeColor.cardColor,
      borderWidth: 1,
      borderColor: themeColor.errorColor,
    },

    rejectButtonText: {
      color: themeColor.errorColor,
    },

    roleNote: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(8),
      textAlign: "center",
    },
  });

export default getStyles;

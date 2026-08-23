import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      paddingHorizontal: responsiveSize(15),
      paddingTop: responsiveSize(14),
      paddingBottom: responsiveSize(40),
    },

    statusBanner: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.secLightAppColor,
      borderRadius: responsiveSize(14),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(16),
    },

    statusIconWrap: {
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(18),
      backgroundColor: themeColor.white,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(10),
    },

    statusTextWrap: {
      flex: 1,
    },

    statusTitle: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    statusSubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(15),
      marginBottom: responsiveSize(16),
    },

    cardTitleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(4),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    verifiedBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.successColor + "1A",
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(3),
      borderRadius: responsiveSize(20),
    },

    verifiedBadgeText: {
      fontSize: responsiveSize(10),
      fontWeight: "700",
      color: themeColor.successColor,
      marginLeft: responsiveSize(3),
    },

    saveButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(4),
    },
  });

export default getStyles;

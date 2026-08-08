import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(5),
    },

    sectionTitle: {
      fontSize: appSize.font_Large,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(10),
    },

    fieldLabel: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.primaryText,
      marginTop: responsiveSize(4),
      marginBottom: responsiveSize(8),
    },

    centreChipRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: responsiveSize(15),
    },

    centreChip: {
      paddingVertical: responsiveSize(8),
      paddingHorizontal: responsiveSize(14),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(8),
      marginBottom: responsiveSize(8),
    },

    centreChipActive: {
      backgroundColor: themeColor.appColor,
      borderColor: themeColor.appColor,
    },

    centreChipText: {
      fontSize: responsiveSize(13),
      color: themeColor.primaryText,
      fontWeight: "600",
    },

    centreChipTextActive: {
      color: themeColor.white,
    },

    verifyLinkRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(12),
      borderRadius: responsiveSize(10),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.background,
      marginBottom: responsiveSize(8),
    },

    verifyLinkText: {
      flex: 1,
      marginLeft: responsiveSize(8),
      fontSize: responsiveSize(13),
      fontWeight: "600",
      color: themeColor.appColor,
    },

    reVerifyText: {
      fontSize: responsiveSize(12),
      fontWeight: "700",
      color: themeColor.secondaryLightText,
    },

    fetchSuccessRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: responsiveSize(5),
      marginBottom: responsiveSize(8),
      marginLeft: responsiveSize(4),
    },

    fetchSuccessText: {
      flex: 1,
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(12),
      color: themeColor.successColor,
      lineHeight: responsiveSize(16),
    },
  });

export default getStyles;

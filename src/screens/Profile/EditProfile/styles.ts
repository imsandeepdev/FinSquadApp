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

    avatarSection: {
      alignItems: "center",
      marginBottom: responsiveSize(18),
    },

    avatarWrap: {
      width: responsiveSize(84),
      height: responsiveSize(84),
      borderRadius: responsiveSize(42),
    },

    avatarImage: {
      width: "100%",
      height: "100%",
      borderRadius: responsiveSize(42),
    },

    avatarEditBadge: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: responsiveSize(28),
      height: responsiveSize(28),
      borderRadius: responsiveSize(14),
      backgroundColor: themeColor.appColor,
      borderWidth: 2,
      borderColor: themeColor.cardColor,
      alignItems: "center",
      justifyContent: "center",
    },

    avatarHint: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(8),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(15),
      marginBottom: responsiveSize(16),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(4),
    },

    readOnlyRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(9),
    },

    readOnlyLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
    },

    readOnlyValueRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    readOnlyValue: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
      marginRight: responsiveSize(6),
    },

    readOnlyDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    readOnlyHint: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(8),
    },

    saveButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(4),
    },
  });

export default getStyles;

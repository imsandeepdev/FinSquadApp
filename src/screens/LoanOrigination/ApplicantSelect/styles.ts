import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(16),
    },

    sectionTitle: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      letterSpacing: 1,
      color: themeColor.secondaryText,
      marginTop: responsiveSize(10),
    },

    sectionSubtitle: {
      fontSize: responsiveSize(13),
      color: themeColor.primaryLightText,
      marginTop: responsiveSize(4),
      marginBottom: responsiveSize(14),
    },

    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      paddingHorizontal: responsiveSize(14),
      height: responsiveSize(46),
      marginBottom: responsiveSize(14),
      borderWidth: 0.5,
      borderColor: themeColor.borderColor,
    },

    searchInput: {
      flex: 1,
      marginLeft: responsiveSize(8),
      color: themeColor.primaryText,
      fontSize: responsiveSize(14),
    },

    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(10),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    cardSelected: {
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.transparent_SecAppColor,
    },

    avatar: {
      width: responsiveSize(42),
      height: responsiveSize(42),
      borderRadius: responsiveSize(21),
      backgroundColor: themeColor.appColor,
      justifyContent: "center",
      alignItems: "center",
      marginRight: responsiveSize(12),
    },

    avatarText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(16),
    },

    info: {
      flex: 1,
    },

    name: {
      fontSize: responsiveSize(15),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    meta: {
      fontSize: responsiveSize(12),
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(2),
    },

    centre: {
      fontSize: responsiveSize(12),
      color: themeColor.appTextColor,
      marginTop: responsiveSize(2),
      fontWeight: "600",
    },

    emptyText: {
      textAlign: "center",
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(30),
    },
  });

export default getStyles;

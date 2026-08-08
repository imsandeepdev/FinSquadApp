import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    topView: {
      borderRadius: responsiveSize(5),
      marginTop: responsiveSize(12),
    },

    headerTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "500",
      color: themeColor.primaryLightText,
      marginBottom: responsiveSize(4),
    },

    mainView: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.appLightColor,
      height: responsiveSize(48),
      borderRadius: responsiveSize(4),
      borderWidth: 1,
      borderColor: themeColor.placeHolder,
      paddingHorizontal: responsiveSize(8),
    },

    leftIconView: {
      width: responsiveSize(30),
      alignItems: "center",
    },

    valueText: {
      flex: 1,
      fontSize: appSize.font_Medium,
      letterSpacing: 1,
      fontWeight: "500",
      color: themeColor.primaryLightText,
      marginHorizontal: responsiveSize(8),
    },

    placeholderText: {
      color: themeColor.placeHolder,
      fontWeight: "400",
    },

    chevron: {
      marginRight: responsiveSize(4),
    },

    errorText: {
      marginTop: responsiveSize(4),
      color: themeColor.errorColor,
      fontSize: responsiveSize(12),
    },

    backdrop: {
      flex: 1,
      backgroundColor: themeColor.overlay,
    },

    sheet: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: "70%",
      backgroundColor: themeColor.cardColor,
      borderTopLeftRadius: responsiveSize(24),
      borderTopRightRadius: responsiveSize(24),
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(10),
      paddingBottom: responsiveSize(28),
    },

    grabber: {
      width: responsiveSize(40),
      height: responsiveSize(4),
      borderRadius: responsiveSize(2),
      backgroundColor: themeColor.borderColor,
      alignSelf: "center",
      marginBottom: responsiveSize(14),
    },

    sheetTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
      marginBottom: responsiveSize(14),
      textAlign: "center",
    },

    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.background,
      borderRadius: responsiveSize(12),
      paddingHorizontal: responsiveSize(12),
      height: responsiveSize(42),
      marginBottom: responsiveSize(10),
    },

    searchInput: {
      flex: 1,
      marginLeft: responsiveSize(8),
      color: themeColor.primaryText,
      fontSize: responsiveSize(14),
    },

    list: {
      flexGrow: 0,
    },

    optionRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: responsiveSize(14),
      paddingHorizontal: responsiveSize(6),
      borderBottomWidth: 0.5,
      borderBottomColor: themeColor.borderColor,
    },

    optionRowActive: {
      backgroundColor: themeColor.transparent_SecAppColor,
      borderRadius: responsiveSize(10),
    },

    optionText: {
      fontSize: responsiveSize(15),
      color: themeColor.primaryText,
      fontWeight: "500",
    },

    optionTextActive: {
      color: themeColor.appColor,
      fontWeight: "700",
    },

    emptyText: {
      textAlign: "center",
      color: themeColor.secondaryLightText,
      paddingVertical: responsiveSize(20),
    },
  });

export default getStyles;

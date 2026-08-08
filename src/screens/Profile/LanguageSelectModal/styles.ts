import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: themeColor.overlay,
    },

    sheet: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
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

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: responsiveSize(4),
    },

    headerTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    subtitle: {
      fontSize: responsiveSize(12.5),
      color: themeColor.secondaryLightText,
      marginBottom: responsiveSize(16),
    },

    optionRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(12),
      paddingHorizontal: responsiveSize(12),
      borderRadius: responsiveSize(12),
      borderWidth: 1.5,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.background,
      marginBottom: responsiveSize(10),
    },

    optionRowActive: {
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.secLightAppColor,
    },

    optionTextWrap: {
      flex: 1,
      marginLeft: responsiveSize(12),
    },

    optionNativeLabel: {
      fontSize: responsiveSize(14.5),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    optionEnglishLabel: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(1),
    },

    moreComingRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(10),
      marginTop: responsiveSize(4),
    },

    moreComingText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(12),
      color: themeColor.placeHolder,
      fontStyle: "italic",
    },
  });

export default getStyles;

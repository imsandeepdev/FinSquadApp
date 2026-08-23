import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

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
      maxHeight: "88%",
      elevation: 16,
      shadowColor: themeColor.black,
      shadowOpacity: 0.15,
      shadowRadius: responsiveSize(16),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(-4),
      },
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
      marginBottom: responsiveSize(16),
    },

    headerTitleWrap: {
      flex: 1,
    },

    headerTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    headerSubtitle: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    closeButton: {
      width: responsiveSize(32),
      height: responsiveSize(32),
      borderRadius: responsiveSize(16),
      backgroundColor: themeColor.surface,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: responsiveSize(10),
    },

    row: {
      flexDirection: "row",
    },

    halfField: {
      flex: 1,
    },

    halfFieldSpacer: {
      width: responsiveSize(12),
    },

    saveButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(6),
    },
  });

export default getStyles;

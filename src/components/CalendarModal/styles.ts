import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { responsiveSize } from "../../res";

export const YEAR_ROW_HEIGHT = responsiveSize(50);

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
      marginBottom: responsiveSize(14),
    },

    navBtn: {
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(18),
      backgroundColor: themeColor.transparent_SecAppColor,
      justifyContent: "center",
      alignItems: "center",
    },

    headerCenter: {
      flexDirection: "row",
    },

    headerPill: {
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(12),
      marginHorizontal: responsiveSize(4),
    },

    headerText: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    weekRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(6),
    },

    weekDayText: {
      width: `${100 / 7}%`,
      textAlign: "center",
      fontSize: responsiveSize(12),
      fontWeight: "600",
      color: themeColor.secondaryLightText,
    },

    daysGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    dayCell: {
      width: `${100 / 7}%`,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(4),
    },

    dayCircle: {
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(18),
      alignItems: "center",
      justifyContent: "center",
    },

    dayCircleSelected: {
      backgroundColor: themeColor.appColor,
    },

    dayCircleToday: {
      borderWidth: 1,
      borderColor: themeColor.appColor,
    },

    dayText: {
      fontSize: responsiveSize(14),
      color: themeColor.primaryText,
      fontWeight: "500",
    },

    dayTextMuted: {
      color: themeColor.secondaryLightText,
    },

    dayTextDisabled: {
      color: themeColor.disabled,
    },

    dayTextSelected: {
      color: themeColor.white,
      fontWeight: "700",
    },

    pickerTitle: {
      fontSize: responsiveSize(15),
      fontWeight: "700",
      color: themeColor.primaryText,
      marginBottom: responsiveSize(14),
      textAlign: "center",
    },

    monthGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    monthCell: {
      width: `${100 / 3}%`,
      paddingVertical: responsiveSize(14),
      alignItems: "center",
      justifyContent: "center",
    },

    monthCellActive: {
      backgroundColor: themeColor.transparent_SecAppColor,
      borderRadius: responsiveSize(14),
    },

    monthText: {
      fontSize: responsiveSize(15),
      fontWeight: "600",
      color: themeColor.primaryText,
    },

    monthTextActive: {
      color: themeColor.appColor,
      fontWeight: "800",
    },

    yearListWrap: {
      maxHeight: responsiveSize(320),
    },

    yearRow: {
      height: YEAR_ROW_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
    },

    yearText: {
      fontSize: responsiveSize(16),
      color: themeColor.primaryText,
      fontWeight: "500",
    },

    yearTextActive: {
      color: themeColor.appColor,
      fontWeight: "800",
      fontSize: responsiveSize(18),
    },
  });

export default getStyles;

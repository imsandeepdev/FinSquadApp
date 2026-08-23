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

    summaryRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(16),
    },

    summaryCard: {
      flex: 1,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      paddingVertical: responsiveSize(14),
      alignItems: "center",
      marginHorizontal: responsiveSize(4),
    },

    summaryValue: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    summaryLabel: {
      fontSize: responsiveSize(10.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
      textAlign: "center",
    },

    sectionTitle: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(8),
      marginTop: responsiveSize(4),
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },

    centreCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(14),
      marginBottom: responsiveSize(12),
    },

    centreTopRow: {
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

    centreCode: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    statusBadge: {
      paddingHorizontal: responsiveSize(9),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(20),
    },

    statusBadgeText: {
      fontSize: responsiveSize(10),
      fontWeight: "700",
    },

    centreMetaRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(10),
    },

    centreMetaText: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginLeft: responsiveSize(5),
      marginRight: responsiveSize(14),
    },

    memberProgressRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: responsiveSize(12),
      marginBottom: responsiveSize(5),
    },

    memberProgressLabel: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
    },

    memberProgressValue: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    progressTrack: {
      height: responsiveSize(6),
      borderRadius: responsiveSize(3),
      backgroundColor: themeColor.borderColor,
      overflow: "hidden",
    },

    progressFill: {
      height: "100%",
      borderRadius: responsiveSize(3),
    },

    healthRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: responsiveSize(12),
      paddingTop: responsiveSize(10),
      borderTopWidth: 1,
      borderTopColor: themeColor.borderColor,
    },

    healthLabelRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    healthLabel: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginLeft: responsiveSize(5),
    },

    healthValue: {
      fontSize: appSize.font_Small,
      fontWeight: "800",
    },
  });

export default getStyles;

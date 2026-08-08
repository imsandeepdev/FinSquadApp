import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

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

    headerRow: {
      marginBottom: responsiveSize(14),
    },

    screenSubtitle: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
    },

    summaryRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(14),
    },

    summaryCard: {
      flex: 1,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(12),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      paddingVertical: responsiveSize(10),
      alignItems: "center",
      marginRight: responsiveSize(8),
    },

    summaryCardLast: {
      marginRight: 0,
    },

    summaryValue: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    summaryLabel: {
      fontSize: responsiveSize(10.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
      textAlign: "center",
    },

    filterRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: responsiveSize(12),
    },

    filterChip: {
      paddingHorizontal: responsiveSize(13),
      paddingVertical: responsiveSize(7),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(8),
      marginBottom: responsiveSize(8),
    },

    filterChipActive: {
      backgroundColor: themeColor.appColor,
      borderColor: themeColor.appColor,
    },

    filterChipText: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    filterChipTextActive: {
      color: themeColor.white,
    },

    caseCard: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(13),
      marginBottom: responsiveSize(10),
    },

    caseIconWrap: {
      width: responsiveSize(38),
      height: responsiveSize(38),
      borderRadius: responsiveSize(10),
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    caseTextWrap: {
      flex: 1,
      minWidth: 0,
    },

    caseTitleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    caseName: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginRight: responsiveSize(8),
    },

    caseTypeBadge: {
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(3),
      borderRadius: responsiveSize(8),
      backgroundColor: themeColor.secLightAppColor,
    },

    caseTypeBadgeText: {
      fontSize: responsiveSize(10),
      fontWeight: "800",
      color: themeColor.appColor,
    },

    caseSubtitle: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
    },

    caseMetaRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: responsiveSize(8),
    },

    caseMetaText: {
      fontSize: responsiveSize(11),
      color: themeColor.secondaryLightText,
    },

    statusBadge: {
      paddingHorizontal: responsiveSize(9),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(10),
    },

    statusBadgeText: {
      fontSize: responsiveSize(10),
      fontWeight: "800",
    },

    emptyWrap: {
      alignItems: "center",
      paddingVertical: responsiveSize(40),
    },

    emptyTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.primaryText,
      marginTop: responsiveSize(10),
    },

    emptySubtitle: {
      fontSize: responsiveSize(12.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
      textAlign: "center",
    },

    // ---- Detail modal ----
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
      maxHeight: "90%",
    },

    grabber: {
      width: responsiveSize(40),
      height: responsiveSize(4),
      borderRadius: responsiveSize(2),
      backgroundColor: themeColor.borderColor,
      alignSelf: "center",
      marginBottom: responsiveSize(14),
    },

    modalHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: responsiveSize(4),
    },

    modalHeaderTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    modalMetaRow: {
      marginBottom: responsiveSize(8),
    },

    modalMetaText: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
    },
  });

export default getStyles;

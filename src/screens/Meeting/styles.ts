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
      paddingTop: responsiveSize(10),
      paddingBottom: responsiveSize(100),
    },

    headerRow: {
      marginBottom: responsiveSize(14),
    },

    screenSubtitle: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    sectionTitle: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(10),
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },

    meetingCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      padding: responsiveSize(14),
      marginBottom: responsiveSize(12),
      flexDirection: "row",
      elevation: 4,
      shadowColor: themeColor.black,
      shadowOpacity: 0.1,
      shadowRadius: responsiveSize(10),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },
    },

    dateBadge: {
      width: responsiveSize(52),
      height: responsiveSize(52),
      borderRadius: responsiveSize(12),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    dateBadgeDay: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appColor,
    },

    dateBadgeMonth: {
      fontSize: responsiveSize(10),
      fontWeight: "700",
      color: themeColor.appColor,
      textTransform: "uppercase",
    },

    meetingInfo: {
      flex: 1,
    },

    meetingTopRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    meetingName: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginRight: responsiveSize(8),
    },

    meetingTimeBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.appColor + "1A",
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(3),
      borderRadius: responsiveSize(20),
    },

    meetingTimeBadgeText: {
      fontSize: responsiveSize(10.5),
      fontWeight: "700",
      color: themeColor.appColor,
      marginLeft: responsiveSize(3),
    },

    meetingRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    meetingRowText: {
      marginLeft: responsiveSize(5),
      fontSize: responsiveSize(12),
      color: themeColor.placeHolder,
      flexShrink: 1,
    },

    meetingFooterRow: {
      flexDirection: "row",
      marginTop: responsiveSize(10),
    },

    footerAction: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(6),
      paddingHorizontal: responsiveSize(10),
      borderRadius: responsiveSize(8),
      backgroundColor: themeColor.surface,
      marginRight: responsiveSize(8),
    },

    footerActionText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      marginLeft: responsiveSize(4),
    },

    emptyWrap: {
      alignItems: "center",
      paddingVertical: responsiveSize(60),
    },

    emptyTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.primaryText,
      marginTop: responsiveSize(12),
    },

    emptySubtitle: {
      fontSize: responsiveSize(12.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
      textAlign: "center",
      paddingHorizontal: responsiveSize(30),
    },

    fab: {
      position: "absolute",
      right: responsiveSize(18),
      bottom: responsiveSize(95),
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveSize(18),
      paddingVertical: responsiveSize(14),
      borderRadius: responsiveSize(30),
      backgroundColor: themeColor.appColor,
      elevation: 8,
      shadowColor: themeColor.black,
      shadowOpacity: 0.25,
      shadowRadius: responsiveSize(10),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },
    },

    fabText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: appSize.font_Small,
      marginLeft: responsiveSize(6),
    },
  });

export default getStyles;

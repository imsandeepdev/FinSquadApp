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
      paddingBottom: responsiveSize(50),
    },

    heroCard: {
      borderRadius: responsiveSize(20),
      marginBottom: responsiveSize(10),
      overflow: "hidden",
      position: "relative",
    },

    heroGradientFill: {
      ...StyleSheet.absoluteFillObject,
    },

    heroCardContent: {
      padding: responsiveSize(15),
    },

    heroTopRow: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    avatarWrap: {
      width: responsiveSize(78),
      height: responsiveSize(78),
      borderRadius: responsiveSize(40),
      padding: responsiveSize(3),
      backgroundColor: "rgba(255,255,255,.25)",
    },

    avatarImage: {
      width: "100%",
      height: "100%",
      borderRadius: responsiveSize(37),
    },

    onlineDot: {
      position: "absolute",
      bottom: responsiveSize(2),
      right: responsiveSize(2),
      width: responsiveSize(14),
      height: responsiveSize(14),
      borderRadius: responsiveSize(7),
      backgroundColor: "#22C55E",
      borderWidth: 2,
      borderColor: themeColor.white,
    },

    heroInfo: {
      flex: 1,
      flexShrink: 1,
      minWidth: 0,
      marginLeft: responsiveSize(14),
    },

    heroName: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.white,
      flexShrink: 1,
    },

    heroRole: {
      fontSize: appSize.font_Small,
      color: "#D6E4FF",
      marginTop: responsiveSize(3),
      flexShrink: 1,
    },

    empChip: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      maxWidth: "100%",
      backgroundColor: "rgba(255,255,255,.15)",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
      marginTop: responsiveSize(8),
    },

    empChipText: {
      color: themeColor.white,
      fontSize: responsiveSize(11),
      fontWeight: "600",
      marginLeft: responsiveSize(5),
      flexShrink: 1,
    },

    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    locationText: {
      color: "#D6E4FF",
      fontSize: responsiveSize(12),
      marginLeft: responsiveSize(4),
      flexShrink: 1,
    },

    achievementRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "rgba(255,255,255,.1)",
      borderRadius: responsiveSize(14),
      paddingVertical: responsiveSize(12),
      paddingHorizontal: responsiveSize(14),
      marginTop: responsiveSize(16),
    },

    achievementItem: {
      flex: 1,
      minWidth: responsiveSize(110),
      alignItems: "flex-start",
    },

    achievementLabel: {
      color: "#FFD54F",
      fontWeight: "700",
      fontSize: appSize.font_Small,
      flexShrink: 1,
    },

    achievementSub: {
      color: themeColor.white,
      fontSize: responsiveSize(11),
      marginTop: responsiveSize(2),
      flexShrink: 1,
    },

    achievementDivider: {
      width: 1,
      alignSelf: "stretch",
      backgroundColor: "rgba(255,255,255,.2)",
      marginHorizontal: responsiveSize(12),
    },

    statsRow: {
      flexDirection: "row",
      marginBottom: responsiveSize(16),
    },

    statCard: {
      flex: 1,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      paddingVertical: responsiveSize(14),
      alignItems: "center",
      marginHorizontal: responsiveSize(4),
    },

    statIconWrap: {
      width: responsiveSize(34),
      height: responsiveSize(34),
      borderRadius: responsiveSize(17),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: responsiveSize(8),
    },

    statValue: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    statLabel: {
      fontSize: responsiveSize(10),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
      textAlign: "center",
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
      marginBottom: responsiveSize(10),
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(6),
    },

    rowLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
    },

    rowValue: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    menuSectionTitle: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(8),
      marginTop: responsiveSize(4),
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },

    menuRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(11),
    },

    menuDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    menuIconWrap: {
      width: responsiveSize(34),
      height: responsiveSize(34),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    menuLabel: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    logoutButton: {
      backgroundColor: themeColor.cardColor,
      borderWidth: 1,
      borderColor: themeColor.errorColor,
      marginHorizontal: 0,
      marginTop: responsiveSize(4),
    },

    logoutButtonText: {
      color: themeColor.errorColor,
    },

    versionText: {
      textAlign: "center",
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(16),
    },
  });

export default getStyles;

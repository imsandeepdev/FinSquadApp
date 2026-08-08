import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(16),
    },

    loadingContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: responsiveSize(80),
      paddingHorizontal: responsiveSize(30),
    },

    loadingTitle: {
      marginTop: responsiveSize(18),
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
      textAlign: "center",
    },

    loadingSubtitle: {
      marginTop: responsiveSize(6),
      fontSize: responsiveSize(13),
      color: themeColor.secondaryLightText,
      textAlign: "center",
    },

    aiTag: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      backgroundColor: themeColor.transparent_SecAppColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(20),
      marginTop: responsiveSize(10),
      marginBottom: responsiveSize(14),
    },

    aiTagText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(12),
      fontWeight: "700",
      color: themeColor.appColor,
    },

    scoreCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(22),
      padding: responsiveSize(20),
      marginBottom: responsiveSize(18),
    },

    scoreLabel: {
      color: themeColor.secondaryLightText,
      fontSize: responsiveSize(14),
    },

    scoreText: {
      fontSize: responsiveSize(40),
      fontWeight: "800",
      marginVertical: responsiveSize(10),
    },

    scoreTotal: {
      color: themeColor.secondaryText,
      fontSize: responsiveSize(20),
    },

    progressBg: {
      height: responsiveSize(10),
      backgroundColor: themeColor.borderColor,
      borderRadius: responsiveSize(20),
      overflow: "hidden",
    },

    progressFill: {
      height: responsiveSize(10),
      borderRadius: responsiveSize(20),
    },

    bandBadge: {
      alignSelf: "flex-start",
      marginTop: responsiveSize(14),
      paddingHorizontal: responsiveSize(14),
      paddingVertical: responsiveSize(8),
      borderRadius: responsiveSize(20),
    },

    bandBadgeText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(13),
    },

    recommendationCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(20),
      padding: responsiveSize(18),
      marginBottom: responsiveSize(20),
    },

    sectionTitle: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(16),
      fontWeight: "700",
      marginBottom: responsiveSize(10),
    },

    recommendationText: {
      color: themeColor.primaryLightText,
      lineHeight: responsiveSize(21),
      fontSize: responsiveSize(13),
    },

    insightWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    insightCard: {
      width: "48%",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(14),
      marginBottom: responsiveSize(14),
    },

    insightTitle: {
      color: themeColor.secondaryText,
      fontSize: responsiveSize(12),
    },

    insightValue: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(18),
      fontWeight: "700",
      marginVertical: responsiveSize(6),
    },

    insightSubtitle: {
      color: themeColor.secondaryLightText,
      fontSize: responsiveSize(11),
    },

    disclaimer: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: responsiveSize(4),
      marginBottom: responsiveSize(20),
    },

    disclaimerText: {
      flex: 1,
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(11),
      color: themeColor.secondaryLightText,
      lineHeight: responsiveSize(15),
    },
  });

export default getStyles;

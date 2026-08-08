import { Dimensions, StyleSheet } from "react-native";
import { responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

const { width } = Dimensions.get("window");

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColor.background,
    },

    content: {
      padding: responsiveSize(20),
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(25),
    },

    greeting: {
      color: themeColor.secondaryText,
      fontSize: responsiveSize(14),
    },

    username: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(28),
      fontWeight: "700",
      marginTop: responsiveSize(4),
    },

    avatar: {
      width: responsiveSize(54),
      height: responsiveSize(54),
      borderRadius: responsiveSize(27),
      backgroundColor: themeColor.appColor,
      justifyContent: "center",
      alignItems: "center",
    },

    avatarText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(18),
    },

    scoreCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(24),
      padding: responsiveSize(22),
      marginBottom: responsiveSize(20),
    },

    cardLabel: {
      color: themeColor.secondaryLightText,
      fontSize: responsiveSize(15),
    },

    scoreText: {
      color: themeColor.appColor,
      fontSize: responsiveSize(44),
      fontWeight: "800",
      marginVertical: responsiveSize(12),
    },

    totalScore: {
      color: themeColor.secondaryText,
      fontSize: responsiveSize(22),
    },

    progressBg: {
      height: responsiveSize(10),
      backgroundColor: themeColor.borderColor,
      borderRadius: responsiveSize(20),
    },

    progressFill: {
      width: "85%",
      height: responsiveSize(10),
      borderRadius: responsiveSize(20),
      backgroundColor: themeColor.appColor,
    },

    status: {
      color: themeColor.successColor,
      marginTop: responsiveSize(12),
      fontWeight: "600",
    },

    recommendationCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(22),
      padding: responsiveSize(20),
      marginBottom: responsiveSize(24),
    },

    recommendationText: {
      color: themeColor.primaryLightText,
      marginTop: responsiveSize(10),
      lineHeight: responsiveSize(24),
    },

    sectionTitle: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(20),
      fontWeight: "700",
      marginBottom: responsiveSize(15),
    },

    insightWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    insightCard: {
      width: width * 0.43,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(20),
      padding: responsiveSize(16),
      marginBottom: responsiveSize(15),
    },

    insightTitle: {
      color: themeColor.secondaryText,
      fontSize: responsiveSize(13),
    },

    insightValue: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(22),
      fontWeight: "700",
      marginVertical: responsiveSize(8),
    },

    insightSubtitle: {
      color: themeColor.secondaryLightText,
      fontSize: responsiveSize(12),
    },

    portfolioCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(20),
      padding: responsiveSize(20),
      marginBottom: responsiveSize(25),
    },

    portfolioRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: responsiveSize(10),
    },

    portfolioLabel: {
      color: themeColor.secondaryLightText,
    },

    portfolioValue: {
      color: themeColor.appColor,
      fontWeight: "700",
    },

    goalCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(16),
      marginBottom: responsiveSize(14),
    },

    goalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: responsiveSize(12),
    },

    goalTitle: {
      color: themeColor.primaryText,
      fontWeight: "600",
    },

    goalPercent: {
      color: themeColor.appColor,
      fontWeight: "700",
    },

    goalProgressBg: {
      height: responsiveSize(8),
      backgroundColor: themeColor.borderColor,
      borderRadius: responsiveSize(10),
    },

    goalProgressFill: {
      height: responsiveSize(8),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.appColor,
    },

    marketCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(20),
      padding: responsiveSize(20),
      marginBottom: responsiveSize(25),
    },

    marketTitle: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(18),
      fontWeight: "700",
    },

    marketBullish: {
      color: themeColor.successColor,
      fontSize: responsiveSize(28),
      fontWeight: "700",
      marginVertical: responsiveSize(10),
    },

    marketSubtitle: {
      color: themeColor.secondaryText,
      marginBottom: responsiveSize(15),
    },

    tagsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    tag: {
      backgroundColor: themeColor.borderColor,
      paddingHorizontal: responsiveSize(14),
      paddingVertical: responsiveSize(8),
      borderRadius: responsiveSize(20),
      marginRight: responsiveSize(10),
    },

    tagText: {
      color: themeColor.primaryText,
    },

    chatBox: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(20),
      padding: responsiveSize(15),
    },

    input: {
      color: themeColor.primaryText,
      minHeight: responsiveSize(50),
    },

    askButton: {
      marginTop: responsiveSize(15),
      backgroundColor: themeColor.appColor,
      paddingVertical: responsiveSize(14),
      borderRadius: responsiveSize(14),
      alignItems: "center",
    },

    askText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(16),
    },

    bottomSpacer: {
      height: responsiveSize(40),
    },
  });

export default getStyles;

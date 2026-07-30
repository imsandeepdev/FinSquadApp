import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(14),
      marginBottom: responsiveSize(14),

      shadowColor: themeColor.black,
      shadowOpacity: 0.05,
      shadowRadius: 8,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(3),
      },
      elevation: 2,
    },

    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: responsiveSize(10),
    },

    iconChip: {
      width: responsiveSize(38),
      height: responsiveSize(38),
      borderRadius: responsiveSize(10),
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    name: {
      flex: 1,
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    chevron: {
      marginLeft: responsiveSize(6),
    },

    amountText: {
      fontSize: appSize.font_Regular,
      fontWeight: "600",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(4),
    },

    rateText: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(8),
    },

    badge: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
    },

    badgeText: {
      fontSize: responsiveSize(11),
      fontWeight: "600",
      marginLeft: responsiveSize(5),
    },
  });

export default getStyles;

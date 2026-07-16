import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    card: {
      backgroundColor: themeColor.cardColor,
      marginHorizontal: responsiveSize(16),
      marginVertical: responsiveSize(6),
      borderRadius: responsiveSize(15),
      padding: responsiveSize(12),
      flexDirection: "row",
      alignItems: "center",
      elevation: 2,
      shadowColor: themeColor.black,
      shadowOpacity: 0.08,
      shadowRadius: 5,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(2),
      },
      borderWidth: 0.3,
      borderColor: themeColor.borderColor,
    },

    infoContainer: {
      flex: 1,
      marginLeft: responsiveSize(14),
    },

    name: {
      fontSize: responsiveSize(14),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    code: {
      marginTop: responsiveSize(2),
      fontSize: responsiveSize(12),
      color: themeColor.primaryLightText,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    mobile: {
      marginLeft: responsiveSize(5),
      fontSize: responsiveSize(12),
      color: themeColor.primaryLightText,
    },

    village: {
      marginLeft: responsiveSize(5),
      fontSize: responsiveSize(12),
      color: themeColor.primaryLightText,
    },

    rightSection: {
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: responsiveSize(80),
    },

    menuButton: {
      padding: responsiveSize(4),
    },
  });

export default getStyles;

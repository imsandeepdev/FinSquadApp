import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      marginHorizontal: responsiveSize(16),
      marginBottom: responsiveSize(10),
      alignItems: "center",
    },

    searchBox: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      paddingHorizontal: responsiveSize(14),
      height: responsiveSize(50),
      elevation: 1,
    },

    input: {
      flex: 1,
      marginLeft: responsiveSize(10),
      fontSize: responsiveSize(15),
      color: themeColor.primaryText,
    },

    filterButton: {
      width: responsiveSize(50),
      height: responsiveSize(50),
      marginLeft: responsiveSize(10),
      borderRadius: responsiveSize(14),
      backgroundColor: themeColor.appColor,
      justifyContent: "center",
      alignItems: "center",
      elevation: 2,
    },
  });

export default getStyles;

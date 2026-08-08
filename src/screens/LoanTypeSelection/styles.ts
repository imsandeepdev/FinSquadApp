import { StyleSheet } from "react-native";
import { responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    searchWrap: {
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(10),
    },

    listContent: {
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(14),
      paddingBottom: responsiveSize(30),
    },

    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: responsiveSize(60),
    },

    emptyTitle: {
      fontSize: responsiveSize(15),
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(4),
    },

    emptySubTitle: {
      fontSize: responsiveSize(12),
      color: themeColor.placeHolder,
    },
  });

export default getStyles;

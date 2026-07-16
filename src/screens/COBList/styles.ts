import { StyleSheet } from "react-native";
import { responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColor.background,
    },

    scrollContent: {
      flexGrow: 1,
    },

    listContent: {
      paddingBottom: responsiveSize(130),
      flexGrow: 1,
    },

    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    emptyTitle: {
      fontSize: responsiveSize(20),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    emptySubTitle: {
      marginTop: responsiveSize(8),
      fontSize: responsiveSize(14),
      color: themeColor.secAppText,
    },
  });

export default getStyles;

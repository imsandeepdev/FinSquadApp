import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      bottom: responsiveSize(75),
      right: responsiveSize(10),
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.appColor,
      paddingHorizontal: responsiveSize(12),
      height: responsiveSize(45),
      borderRadius: responsiveSize(30),
      elevation: 8,
      shadowColor: themeColor.black,
      shadowOpacity: 0.25,
      shadowRadius: 8,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(5),
      },
    },

    text: {
      color: themeColor.white,
      marginLeft: responsiveSize(4),
      fontWeight: "700",
      fontSize: responsiveSize(12),
    },
  });

export default getStyles;

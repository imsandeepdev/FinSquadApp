import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { responsiveSize } from "../../res";

const getStyles = (AppColor: ThemeColorType) =>
  StyleSheet.create({
    resetBottomContainer: {
      justifyContent: "flex-end",
    },

    resetBottomLine: {
      height: responsiveSize(1),
      backgroundColor: AppColor.borderColor,
      opacity: 0.6,
      width: "100%",
    },

    resetBottomRowView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: responsiveSize(10),
    },

    forgotPasswordText: {
      flex: 1,
      color: AppColor.primaryText,
      fontSize: responsiveSize(14),
      fontWeight: "400",
    },

    resetPasswordButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(6),
      paddingHorizontal: responsiveSize(14),
      borderWidth: 0.6,
      borderColor: AppColor.appColor,
      borderRadius: responsiveSize(20),
    },

    resetPasswordButtonText: {
      color: AppColor.appColor,
      fontSize: responsiveSize(14),
      fontWeight: "600",
    },
  });

export default getStyles;
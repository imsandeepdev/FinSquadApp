import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: AppColor.appColor,
  },

  header: {
    padding: responsiveSize(10),
    backgroundColor: AppColor.background,
  },

  stepRow: {
    alignItems: "flex-end",
  },

  stepText: {
    color: AppColor.primaryText,
    fontWeight: "700",
    fontSize: appSize.font_Medium,
  },

  title: {
    textAlign: "center",
    marginTop: responsiveSize(10),
    fontSize: appSize.font_Large,
    fontWeight: "700",
    color: AppColor.appTextColor,
  },

  bottomContainer: {
    position: "absolute",
    bottom:0,
    left:0,
    right:0,

    backgroundColor: AppColor.background
  },

bottomViewContainer: {
    backgroundColor: AppColor.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: responsiveSize(15),
    paddingVertical: responsiveSize(12),
    paddingBottom: responsiveSize(25),

    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 12,
    },

  backButton: {
    width: responsiveSize(80),
    height: responsiveSize(45),
    borderRadius: responsiveSize(10),
    backgroundColor: AppColor.appLightTextColor,
    borderWidth:0.5,
    borderColor: AppColor.appColor,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  backText: {
    fontSize: appSize.font_Medium,
    fontWeight: "600",
    color: AppColor.appColor,
  },

  nextButton: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    backgroundColor: AppColor.appColor,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: AppColor.appLightTextColor,
    fontWeight: "700",
    fontSize: appSize.font_Medium,
  },
});
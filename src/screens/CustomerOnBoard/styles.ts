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
    fontSize: appSize.font_Small,
  },

  title: {
    textAlign: "center",
    marginTop: responsiveSize(4),
    fontSize: appSize.font_Regular,
    fontWeight: "700",
    color: AppColor.appTextColor,
  },

  bottomContainer: {
    position: "absolute",
    bottom: responsiveSize(0),
    left: responsiveSize(0),
    right: responsiveSize(0),

    backgroundColor: AppColor.background
  },

bottomViewContainer: {
    backgroundColor: AppColor.white,
    borderTopLeftRadius: responsiveSize(20),
    borderTopRightRadius: responsiveSize(20),
    paddingHorizontal: responsiveSize(15),
    paddingVertical: responsiveSize(12),
    paddingBottom: responsiveSize(25),

    flexDirection: "row",

    shadowColor: AppColor.black,
    shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(-3),
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
    marginRight: responsiveSize(10),
  },

  backText: {
    fontSize: appSize.font_Medium,
    fontWeight: "600",
    color: AppColor.appColor,
  },

  nextButton: {
    flex: 1,
    height: responsiveSize(45),
    borderRadius: responsiveSize(10),
    backgroundColor: AppColor.appColor,
    justifyContent: "center",
    alignItems: "center",
  },

  nextButtonDisabled: {
    opacity: 0.45,
  },

  nextText: {
    color: AppColor.appLightTextColor,
    fontWeight: "700",
    fontSize: appSize.font_Medium,
  },

  scrollContent: {
    paddingBottom: responsiveSize(120),
  },
});
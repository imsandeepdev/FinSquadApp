import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    topView: {
      marginTop: responsiveSize(12),
    },

    headerTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "500",
      color: themeColor.primaryLightText,
      marginBottom: responsiveSize(4),
    },

    uploadTile: {
      flexDirection: "row",
      alignItems: "center",
      minHeight: responsiveSize(64),
      borderRadius: responsiveSize(12),
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.appLightColor,
      paddingHorizontal: responsiveSize(14),
      marginTop: responsiveSize(10),
    },

    uploadTileDisabled: {
      borderColor: themeColor.borderColor,
      opacity: 0.6,
    },

    uploadIconWrap: {
      width: responsiveSize(38),
      height: responsiveSize(38),
      borderRadius: responsiveSize(19),
      backgroundColor: themeColor.transparent_SecAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    uploadTextWrap: {
      flex: 1,
    },

    uploadTitleText: {
      fontSize: responsiveSize(14),
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    uploadSubText: {
      fontSize: responsiveSize(12),
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(2),
    },

    previewRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(10),
    },

    previewThumb: {
      width: responsiveSize(64),
      height: responsiveSize(64),
      borderRadius: responsiveSize(10),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    previewInfo: {
      flex: 1,
      marginLeft: responsiveSize(12),
    },

    previewFileText: {
      fontSize: responsiveSize(13),
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    previewActionsRow: {
      flexDirection: "row",
      marginTop: responsiveSize(6),
    },

    previewActionBtn: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: responsiveSize(18),
    },

    previewActionText: {
      fontSize: responsiveSize(12),
      fontWeight: "600",
      marginLeft: responsiveSize(4),
    },

    errorText: {
      marginTop: responsiveSize(4),
      color: themeColor.errorColor,
      fontSize: responsiveSize(12),
    },
  });

export default getStyles;

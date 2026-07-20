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

    previewThumbWrap: {
      width: responsiveSize(64),
      height: responsiveSize(64),
    },

    previewThumb: {
      width: responsiveSize(64),
      height: responsiveSize(64),
      borderRadius: responsiveSize(10),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    removeBadge: {
      position: "absolute",
      top: responsiveSize(-7),
      right: responsiveSize(-7),
      width: responsiveSize(20),
      height: responsiveSize(20),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.errorColor,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: themeColor.cardColor,
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

    modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.85)",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: responsiveSize(20),
    },

    modalCloseBtn: {
      position: "absolute",
      top: responsiveSize(50),
      right: responsiveSize(20),
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(18),
      backgroundColor: "rgba(255,255,255,0.15)",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
    },

    modalDocLabel: {
      position: "absolute",
      top: responsiveSize(58),
      left: responsiveSize(20),
      color: themeColor.white,
      fontSize: responsiveSize(14),
      fontWeight: "600",
    },

    modalImage: {
      width: "100%",
      height: "65%",
      borderRadius: responsiveSize(12),
    },

    modalActionsRow: {
      flexDirection: "row",
      marginTop: responsiveSize(24),
    },

    modalActionBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(12),
      paddingHorizontal: responsiveSize(20),
      borderRadius: responsiveSize(10),
      marginHorizontal: responsiveSize(8),
    },

    modalActionText: {
      fontSize: responsiveSize(14),
      fontWeight: "600",
      marginLeft: responsiveSize(6),
      color: themeColor.white,
    },

    modalLockedNote: {
      marginTop: responsiveSize(24),
      color: themeColor.white,
      fontSize: responsiveSize(13),
      fontWeight: "500",
      textAlign: "center",
      paddingHorizontal: responsiveSize(20),
    },

    slotsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: responsiveSize(10),
    },

    slotCard: {
      width: "48%",
      aspectRatio: 1.5,
      borderRadius: responsiveSize(12),
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.appLightColor,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },

    slotCardDisabled: {
      borderColor: themeColor.borderColor,
      opacity: 0.6,
    },

    slotCardFilled: {
      borderStyle: "solid",
      borderColor: themeColor.borderColor,
      padding: 0,
    },

    slotImage: {
      width: "100%",
      height: "100%",
    },

    slotIconWrap: {
      width: responsiveSize(32),
      height: responsiveSize(32),
      borderRadius: responsiveSize(16),
      backgroundColor: themeColor.transparent_SecAppColor,
      alignItems: "center",
      justifyContent: "center",
    },

    slotLabel: {
      fontSize: responsiveSize(12),
      fontWeight: "600",
      color: themeColor.appTextColor,
      marginTop: responsiveSize(6),
      textAlign: "center",
    },

    slotSubLabel: {
      fontSize: responsiveSize(10),
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(2),
      textAlign: "center",
      paddingHorizontal: responsiveSize(6),
    },

    slotRemoveBadge: {
      position: "absolute",
      top: responsiveSize(6),
      right: responsiveSize(6),
      width: responsiveSize(22),
      height: responsiveSize(22),
      borderRadius: responsiveSize(11),
      backgroundColor: themeColor.errorColor,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: themeColor.white,
    },

    slotUploadedTag: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.45)",
      paddingVertical: responsiveSize(4),
      alignItems: "center",
    },

    slotUploadedTagText: {
      fontSize: responsiveSize(10),
      fontWeight: "600",
      color: themeColor.white,
    },
  });

export default getStyles;

import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../../res/colors/theme.types";
import { responsiveSize } from "../../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: themeColor.overlay,
    },

    sheet: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: themeColor.cardColor,
      borderTopLeftRadius: responsiveSize(24),
      borderTopRightRadius: responsiveSize(24),
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(10),
      paddingBottom: responsiveSize(28),
      maxHeight: "88%",
    },

    grabber: {
      width: responsiveSize(40),
      height: responsiveSize(4),
      borderRadius: responsiveSize(2),
      backgroundColor: themeColor.borderColor,
      alignSelf: "center",
      marginBottom: responsiveSize(14),
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: responsiveSize(14),
    },

    headerTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    methodRow: {
      flexDirection: "row",
      marginTop: responsiveSize(6),
      marginBottom: responsiveSize(14),
    },

    methodTab: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(10),
      borderRadius: responsiveSize(10),
      borderWidth: 1.5,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.background,
      marginRight: responsiveSize(8),
    },

    methodTabActive: {
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.secLightAppColor,
    },

    methodTabText: {
      fontSize: responsiveSize(12.5),
      fontWeight: "700",
      color: themeColor.primaryText,
      marginLeft: responsiveSize(6),
    },

    methodTabTextActive: {
      color: themeColor.appColor,
    },

    methodContent: {
      paddingTop: responsiveSize(4),
      paddingBottom: responsiveSize(6),
    },

    helperText: {
      fontSize: responsiveSize(13),
      color: themeColor.secondaryLightText,
      marginBottom: responsiveSize(12),
      lineHeight: responsiveSize(18),
    },

    actionButton: {
      marginHorizontal: 0,
    },

    statusRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(12),
    },

    statusText: {
      flex: 1,
      marginLeft: responsiveSize(8),
      fontSize: responsiveSize(12.5),
      color: themeColor.secondaryLightText,
      lineHeight: responsiveSize(17),
    },

    bioIconWrap: {
      width: responsiveSize(72),
      height: responsiveSize(72),
      borderRadius: responsiveSize(36),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginBottom: responsiveSize(14),
    },

    demoHint: {
      fontSize: responsiveSize(11.5),
      color: themeColor.infoColor,
      marginTop: responsiveSize(-6),
      marginBottom: responsiveSize(10),
    },

    resendLink: {
      alignSelf: "center",
      marginTop: responsiveSize(12),
      padding: responsiveSize(4),
    },

    resendLinkText: {
      fontSize: responsiveSize(13),
      fontWeight: "600",
      color: themeColor.appColor,
    },

    previewCard: {
      marginTop: responsiveSize(6),
      padding: responsiveSize(14),
      borderRadius: responsiveSize(14),
      backgroundColor: themeColor.background,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    previewHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: responsiveSize(10),
    },

    previewHeaderText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(13.5),
      fontWeight: "700",
      color: themeColor.successColor,
    },

    previewRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: responsiveSize(6),
      borderBottomWidth: 1,
      borderBottomColor: themeColor.borderColor,
    },

    previewLabel: {
      fontSize: responsiveSize(12.5),
      color: themeColor.secondaryLightText,
    },

    previewValue: {
      flex: 1,
      textAlign: "right",
      marginLeft: responsiveSize(12),
      fontSize: responsiveSize(12.5),
      fontWeight: "600",
      color: themeColor.primaryText,
    },

    previewActionRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(14),
    },

    previewSecondaryButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(12),
      borderRadius: responsiveSize(10),
      borderWidth: 1.5,
      borderColor: themeColor.borderColor,
      marginRight: responsiveSize(10),
    },

    previewSecondaryButtonText: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    previewPrimaryButton: {
      flex: 1,
      marginHorizontal: 0,
    },
  });

export default getStyles;

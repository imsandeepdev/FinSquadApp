import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../../res";

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
      maxHeight: "85%",
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

    profileRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: responsiveSize(16),
    },

    profileInfo: {
      flex: 1,
      marginLeft: responsiveSize(12),
    },

    profileName: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    profileCode: {
      fontSize: responsiveSize(12),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    infoCard: {
      backgroundColor: themeColor.background,
      borderRadius: responsiveSize(12),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(12),
      marginBottom: responsiveSize(14),
    },

    infoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: responsiveSize(6),
    },

    infoLabel: {
      fontSize: responsiveSize(12.5),
      color: themeColor.secondaryLightText,
    },

    infoValue: {
      fontSize: responsiveSize(12.5),
      fontWeight: "600",
      color: themeColor.primaryText,
    },

    sectionTitle: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      color: themeColor.primaryText,
      marginBottom: responsiveSize(8),
    },

    centreMiniCard: {
      backgroundColor: themeColor.secLightAppColor,
      borderRadius: responsiveSize(12),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(16),
    },

    centreMiniName: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      color: themeColor.appColor,
    },

    centreMiniRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    centreMiniText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(11.5),
      color: themeColor.primaryText,
    },

    actionsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    actionButton: {
      width: "48.5%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(12),
      borderRadius: responsiveSize(10),
      borderWidth: 1.5,
      borderColor: themeColor.borderColor,
      marginBottom: responsiveSize(10),
    },

    actionButtonPrimary: {
      borderColor: themeColor.appColor,
      backgroundColor: themeColor.secLightAppColor,
    },

    actionButtonText: {
      marginLeft: responsiveSize(6),
      fontSize: responsiveSize(12),
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    actionButtonTextPrimary: {
      color: themeColor.appColor,
    },
  });

export default getStyles;

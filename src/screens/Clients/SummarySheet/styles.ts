import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

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
      elevation: 16,
      shadowColor: themeColor.black,
      shadowOpacity: 0.15,
      shadowRadius: responsiveSize(16),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(-4),
      },
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
      marginBottom: responsiveSize(16),
    },

    headerTitleWrap: {
      flex: 1,
    },

    headerTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.primaryText,
    },

    headerSubtitle: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    closeButton: {
      width: responsiveSize(32),
      height: responsiveSize(32),
      borderRadius: responsiveSize(16),
      backgroundColor: themeColor.surface,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: responsiveSize(10),
    },

    statsRow: {
      flexDirection: "row",
    },

    statCard: {
      flex: 1,
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      paddingVertical: responsiveSize(16),
      alignItems: "center",
      marginRight: responsiveSize(10),
      elevation: 3,
      shadowColor: themeColor.black,
      shadowOpacity: 0.08,
      shadowRadius: responsiveSize(8),
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(3),
      },
    },

    statCardLast: {
      marginRight: 0,
    },

    statIconWrap: {
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(18),
      alignItems: "center",
      justifyContent: "center",
      marginBottom: responsiveSize(8),
    },

    statValue: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    statLabel: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
      textAlign: "center",
    },
  });

export default getStyles;

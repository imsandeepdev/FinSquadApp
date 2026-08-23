import { StyleSheet, Platform } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
        viewContainer: {
        borderRadius: responsiveSize(16),
        overflow: "hidden",
        shadowColor: AppColor.shadow,
        shadowOffset: { width: 0, height: responsiveSize(4) },
        shadowOpacity: 0.18,
        shadowRadius: responsiveSize(8),
        ...Platform.select({ android: { elevation: 4 } }),
        },

        gradientFill: {
        borderRadius: responsiveSize(16),
        },

        contentPad: {
        paddingHorizontal: responsiveSize(14),
        paddingVertical: responsiveSize(12),
        },

        header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        },

        leftHeader: {
        flexDirection: "row",
        alignItems: "center",
        },

        iconBadge: {
        width: responsiveSize(22),
        height: responsiveSize(22),
        borderRadius: responsiveSize(11),
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        alignItems: "center",
        },

        heading: {
        marginLeft: responsiveSize(8),
        fontSize: responsiveSize(11.5),
        fontWeight: "800",
        letterSpacing: 0.5,
        color: AppColor.white,
        },

        button: {
        paddingHorizontal: responsiveSize(10),
        paddingVertical: responsiveSize(5),
        borderRadius: responsiveSize(20),
        backgroundColor: "rgba(255,255,255,0.16)",
        flexDirection: "row",
        alignItems: "center",
        },

        buttonText: {
        color: AppColor.white,
        fontSize: responsiveSize(11.5),
        fontWeight: "700",
        marginRight: responsiveSize(2),
        },

        content: {
        marginTop: responsiveSize(14),
        flexDirection: "row",
        alignItems: "center",
        },

        aiCircle: {
        width: responsiveSize(42),
        height: responsiveSize(42),
        borderRadius: responsiveSize(21),
        backgroundColor: AppColor.white,
        justifyContent: "center",
        alignItems: "center",
        },

        textContainer: {
        flex: 1,
        marginLeft: responsiveSize(12),
        },

        title: {
        fontSize: responsiveSize(14),
        fontWeight: "700",
        color: AppColor.white,
        },

        subtitle: {
        marginTop: responsiveSize(4),
        fontSize: responsiveSize(12),
        lineHeight: responsiveSize(17),
        color: "rgba(255,255,255,0.85)",
        },

        highlight: {
        color: "#FDE68A",
        fontWeight: "800",
        fontSize: responsiveSize(12),
        },
});

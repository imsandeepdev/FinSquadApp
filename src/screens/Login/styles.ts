import { StyleSheet } from "react-native";
import { AppColor,  responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";


export const getStyles = (AppColor: ThemeColorType) =>
 StyleSheet.create({
    safe: { flex: 1, backgroundColor: AppColor.appColor},
    container: { flex: 1 },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: AppColor.appColor,
    },
    bodyContainer: {
        flex: 1,
        marginTop: responsiveSize(20),
    },

    brandBadge: {
        width: responsiveSize(56),
        height: responsiveSize(56),
        borderRadius: responsiveSize(28),
        backgroundColor: AppColor.appColor,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: responsiveSize(10),
    },

    roleLabel: {
        fontSize: responsiveSize(13),
        fontWeight: "600",
        color: AppColor.primaryText,
        marginBottom: responsiveSize(8),
        marginTop: responsiveSize(16),
    },

    roleRow: {
        flexDirection: "row",
        marginBottom: responsiveSize(4),
    },

    roleCard: {
        flex: 1,
        alignItems: "center",
        paddingVertical: responsiveSize(10),
        paddingHorizontal: responsiveSize(4),
        borderRadius: responsiveSize(12),
        borderWidth: 1.5,
        borderColor: AppColor.borderColor,
        backgroundColor: AppColor.cardColor,
        marginRight: responsiveSize(8),
    },

    roleCardLast: {
        marginRight: responsiveSize(0),
    },

    roleCardActive: {
        borderColor: AppColor.appColor,
        backgroundColor: AppColor.secLightAppColor,
    },

    roleCardIconWrap: {
        width: responsiveSize(30),
        height: responsiveSize(30),
        borderRadius: responsiveSize(15),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColor.appLightColor,
        marginBottom: responsiveSize(6),
    },

    roleCardText: {
        fontSize: responsiveSize(11.5),
        fontWeight: "700",
        color: AppColor.primaryText,
        textAlign: "center",
    },

    roleCardTextActive: {
        color: AppColor.appColor,
    },

    rememberMeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: responsiveSize(14),
    },
    rememberMePressable: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: responsiveSize(18),
        height: responsiveSize(18),
        borderRadius: responsiveSize(4),
        borderWidth: 1.5,
        borderColor: AppColor.borderColor,
        alignItems: "center",
        justifyContent: "center",
        marginRight: responsiveSize(8),
    },
    checkboxChecked: {
        backgroundColor: AppColor.appColor,
        borderColor: AppColor.appColor,
    },
    rememberMeText: {
        fontSize: responsiveSize(13),
        color: AppColor.primaryText,
    },
    forgotPasswordText: {
        fontSize: responsiveSize(13),
        fontWeight: "600",
        color: AppColor.appColor,
    },
    loginButtonContainer: {
        marginTop: responsiveSize(20),
    },
    loginButton: {
        marginHorizontal: responsiveSize(0),
    },
    title: {
        fontSize: responsiveSize(18),
        fontWeight: "600",
        marginBottom: responsiveSize(4),
        color: AppColor.primaryText
    },
    subtitle: {
        fontSize: responsiveSize(13),
        color: AppColor.secondaryLightText,
        marginBottom: responsiveSize(16),
    },

    topLightCardView: {
        height: responsiveSize(35), 
        marginHorizontal: responsiveSize(10), 
        backgroundColor: AppColor.secLightAppColor , 
        borderTopRightRadius: responsiveSize(20), 
        borderTopLeftRadius: responsiveSize(20), 
        position:'absolute',
        top:responsiveSize(-10),
        bottom:responsiveSize(0),
        left:responsiveSize(0),
        right:responsiveSize(0)
    },
    topImageContainer: {
        alignItems: "center", 
        justifyContent:"center",
        marginBottom: responsiveSize(15), 
        marginTop: responsiveSize(15),
        height: responsiveSize(200),
    },
    cardView: {
        flex:1,
        backgroundColor:  AppColor.appLightColor ,
        borderTopLeftRadius: responsiveSize(20),
        borderTopRightRadius: responsiveSize(20)    ,
        padding: responsiveSize(20),
        // borderTopWidth: 0.6,
        // borderBottomWidth:0,
        // borderColor: AppColor.appColor,
    },

    cardViewTopContainer: {
        alignItems: "center", 
        marginTop: responsiveSize(10),
        flex: 1/2,
        alignSelf:'center',
        justifyContent:'center'
    },
    cardViewTopTitleText: {
        fontSize: responsiveSize(20),
        color: AppColor.secondaryText,
        fontWeight: "600",

    },
    cardViewTopSubTitleText: {
        fontSize: responsiveSize(14),
        color: AppColor.secondaryLightText,
    },
    
    rememberView: {
        flexDirection:"row", 
        marginVertical: responsiveSize(20), 
        alignItems:'center'
    },
    rememberTextView: {
        flex:1,
        marginLeft: responsiveSize(5)
    },
    rememberText: {
        fontSize: responsiveSize(14),
        color:  AppColor.lightWhite ,
        fontWeight: "500",
    },

    resetBottomContainer: {
        flex:1, 
        justifyContent:'flex-end',
        paddingBottom: responsiveSize(20)
    },

    registerRowView: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: responsiveSize(10),
    },

    registerText: {
      color: AppColor.primaryText,
      fontSize: responsiveSize(14),
      fontWeight: "400",
    },

    registerButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: responsiveSize(6),
      paddingHorizontal: responsiveSize(14),
      borderRadius: responsiveSize(20),
    },

    registerButtonText: {
      color: AppColor.appColor,
      fontSize: responsiveSize(14),
      fontWeight: "600",
    },

});

export default getStyles;
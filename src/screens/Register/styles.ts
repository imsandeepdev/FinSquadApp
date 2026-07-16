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
    rememberMeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveSize(10),
    },
    rememberMeText: {
        color: AppColor.primaryText,
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
        marginBottom: responsiveSize(8), 
        color: AppColor.primaryText
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
        textAlign:'center'
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
});

export default getStyles;
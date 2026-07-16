import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
        viewContainer: {
        borderWidth:1,
        borderRadius:responsiveSize(15),
        overflow:"hidden"

        },

        contentPad:{
        paddingHorizontal:responsiveSize(10),
        paddingVertical:responsiveSize(6),
        },

        container:
        {
            marginHorizontal:responsiveSize(0),
        },

        header:
        {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        },

        leftHeader:{
        flexDirection:"row",
        alignItems:"center",
        },

        heading:{
        marginLeft:responsiveSize(8),
        fontSize:responsiveSize(12),
        fontWeight:"700",
        color:AppColor.white,
        },

        button:{
        paddingHorizontal:responsiveSize(6),
        paddingVertical:responsiveSize(4),
        borderRadius:responsiveSize(20),
        backgroundColor:"rgba(255,255,255,.08)",
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 0.5
        },

        buttonText:{
        color:AppColor.primaryText,
        fontSize:responsiveSize(12),
        fontWeight:'500'
        },

        content:{
        marginVertical:responsiveSize(6),
        flexDirection:"row",
        },

        aiCircle:{
        width:responsiveSize(40),
        height:responsiveSize(40),
        borderRadius:responsiveSize(20),
        backgroundColor:AppColor.secAppColor,
        justifyContent:"center",
        alignItems:"center",
        },

        aiText:{
        fontSize:responsiveSize(16),
        fontWeight:"700",
        color:AppColor.appLightColor,
        },

        textContainer:{
        flex:1,
        marginLeft:responsiveSize(10),
        },

        title:{
        fontSize:responsiveSize(14),
        fontWeight:"700",
        color:AppColor.appLightColor,
        },

        subtitle:{
        marginTop:responsiveSize(4),
        fontSize:responsiveSize(12),
        color:AppColor.lightWhite,
        },

        green:{
        color:AppColor.successColor,
        fontWeight:"700",
        fontSize:responsiveSize(12),
        },

        arrowRow:{
        marginTop:responsiveSize(10),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        },

        arrow:{
        fontSize:responsiveSize(14),
        color:"#64748B",
        },

        team:{
        flexDirection:"row",
        },

        avatar:{
        width:responsiveSize(40),
        height:responsiveSize(40),
        borderRadius:responsiveSize(20),
        marginLeft:responsiveSize(-8),
        borderWidth:1,
        borderColor:"#071A70",

        },


});

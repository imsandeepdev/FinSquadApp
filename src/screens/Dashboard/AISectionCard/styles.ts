import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
        viewContainer: {
        borderWidth:1,
        borderRadius:15,
        overflow:"hidden"

        },
        container:
        {
            marginHorizontal:0,
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
        marginLeft:8,
        fontSize:12,
        fontWeight:"700",
        color:"#fff",
        },

        button:{
        paddingHorizontal:6,
        paddingVertical:4,
        borderRadius:20,
        backgroundColor:"rgba(255,255,255,.08)",
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 0.5
        },

        buttonText:{
        color:AppColor.primaryText,
        fontSize:12,
        fontWeight:'500'
        },

        content:{
        marginVertical:6,
        flexDirection:"row",
        },

        aiCircle:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:AppColor.secAppColor,
        justifyContent:"center",
        alignItems:"center",
        },

        aiText:{
        fontSize:16,
        fontWeight:"700",
        color:AppColor.appLightColor,
        },

        textContainer:{
        flex:1,
        marginLeft:10,
        },

        title:{
        fontSize:14,
        fontWeight:"700",
        color:AppColor.appLightColor,
        },

        subtitle:{
        marginTop:4,
        fontSize:12,
        color:AppColor.lightWhite,
        },

        green:{
        color:AppColor.successColor,
        fontWeight:"700",
        fontSize:12,
        },

        arrowRow:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        },

        arrow:{
        fontSize:14,
        color:"#64748B",
        },

        team:{
        flexDirection:"row",
        },

        avatar:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:-8,
        borderWidth:1,
        borderColor:"#071A70",

        },


});
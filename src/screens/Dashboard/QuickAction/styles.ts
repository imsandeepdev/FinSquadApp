import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
    container:{
    // marginHorizontal:20,
    // marginTop:20,
    },

    heading:{
    fontSize:16,
    fontWeight:"700",
    color:"#071A52",
    marginBottom:10,
    },

    grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    },

    card:{
    width:"31%",
    backgroundColor:"#fff",
    paddingVertical:14,
    borderRadius:20,
    alignItems:"center",
    marginBottom:15,
    elevation:5,
    shadowColor:"#000",
    shadowOpacity:.08,
    shadowOffset:{
    width:0,
    height:4,
    },
    shadowRadius:10,
    },

    iconContainer:{
    height:50,
    width:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    },

    title:{
    marginTop:8,
    fontSize:12,
    fontWeight:"600",
    color:AppColor.primaryText,
    },
    subtitle:{
    marginTop:2,
    fontSize:10,
    color:AppColor.placeHolder,
    textAlign:"center",
    },
})
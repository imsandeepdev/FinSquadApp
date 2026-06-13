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
    paddingVertical:16,
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
    height:60,
    width:60,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    },

    title:{
    marginTop:10,
    fontSize:14,
    fontWeight:"600",
    color:AppColor.primaryText,
    },
})
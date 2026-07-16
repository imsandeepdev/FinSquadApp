import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
    container:{
    // marginHorizontal:20,
    // marginTop:20,
    },

    heading:{
    fontSize:responsiveSize(16),
    fontWeight:"700",
    color:AppColor.primaryText,
    marginBottom:responsiveSize(10),
    },

    grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    },

    card:{
    width:"31%",
    backgroundColor:AppColor.cardColor,
    paddingVertical:responsiveSize(14),
    borderRadius:responsiveSize(20),
    alignItems:"center",
    marginBottom:responsiveSize(15),
    elevation:5,
    shadowColor:"#000",
    shadowOpacity:.08,
    shadowOffset:{
    width:0,
    height:responsiveSize(4),
    },
    shadowRadius:responsiveSize(10),
    },

    iconContainer:{
    height:responsiveSize(50),
    width:responsiveSize(50),
    borderRadius:responsiveSize(25),
    justifyContent:"center",
    alignItems:"center",
    },

    title:{
    marginTop:responsiveSize(8),
    fontSize:responsiveSize(12),
    fontWeight:"600",
    color:AppColor.primaryText,
    },
    subtitle:{
    marginTop:responsiveSize(2),
    fontSize:responsiveSize(10),
    color:AppColor.placeHolder,
    textAlign:"center",
    },
})

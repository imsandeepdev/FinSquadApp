import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

container:{
    backgroundColor: AppColor.lightWhite,
    borderWidth:1,
    borderRadius:15,
    paddingVertical:10,
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:8,
    shadowColor:"#000",
    shadowOpacity:.08,
    shadowOffset:{
        width:0,
        height:5,
    },
    shadowRadius:10,
},

card:{
    flex:1,
    paddingHorizontal:6,
    height:70
},

divider:{
    width:1,
    backgroundColor:AppColor.borderColor,
},

iconContainer:{
    width:28,
    height:28,
    borderRadius:6,
    justifyContent:"center",
    alignItems:"center",
    padding:2

},

title:{
    fontSize:12,
    color:AppColor.primaryText,
    fontWeight:"500",
},

value:{
    marginTop:5,
    fontSize:14,
    fontWeight:"700",
    color: AppColor.primaryText,
},

bottomRow:{
    marginTop:5,
    flexDirection:"row",
    alignItems:"center",
},

changeContainer:{
    paddingHorizontal:5,
    paddingVertical:4,
    borderRadius:10,
    backgroundColor:"#EAFBF3",
},

change:{
    fontWeight:"700",
    color:AppColor.successColor,
    fontSize:10,
},

subtitle:{
    marginLeft:4,
    fontSize:10,
    color: AppColor.placeHolder,
},

});
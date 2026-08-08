import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

container:{
    backgroundColor: AppColor.lightWhite,
    borderWidth:1,
    borderRadius:responsiveSize(15),
    paddingVertical:responsiveSize(10),
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:8,
    shadowColor:"#000",
    shadowOpacity:.08,
    shadowOffset:{
        width:0,
        height:responsiveSize(5),
    },
    shadowRadius:responsiveSize(10),
},

card:{
    flex:1,
    paddingHorizontal:responsiveSize(6),
    height:responsiveSize(70)
},

divider:{
    width:1,
    backgroundColor:AppColor.borderColor,
},

iconContainer:{
    width:responsiveSize(28),
    height:responsiveSize(28),
    borderRadius:responsiveSize(6),
    justifyContent:"center",
    alignItems:"center",
    padding:responsiveSize(2)

},

title:{
    fontSize:responsiveSize(12),
    color:AppColor.primaryText,
    fontWeight:"500",
},

value:{
    marginTop:responsiveSize(5),
    fontSize:responsiveSize(14),
    fontWeight:"700",
    color: AppColor.primaryText,
},

bottomRow:{
    marginTop:responsiveSize(5),
    flexDirection:"row",
    alignItems:"center",
},

changeContainer:{
    paddingHorizontal:responsiveSize(5),
    paddingVertical:responsiveSize(4),
    borderRadius:responsiveSize(10),
    backgroundColor:"#EAFBF3",
},

change:{
    fontWeight:"700",
    color:AppColor.successColor,
    fontSize:responsiveSize(10),
},

subtitle:{
    marginLeft:responsiveSize(4),
    fontSize:responsiveSize(10),
    color: AppColor.placeHolder,
},

rowFlex:{
    flexDirection:"row",
    flex:1,
},

infoWrap:{
    flex:1,
    marginLeft:responsiveSize(4),
},

});

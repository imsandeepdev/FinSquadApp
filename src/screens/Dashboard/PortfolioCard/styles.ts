import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

container:{
marginHorizontal:responsiveSize(20),
marginTop:responsiveSize(-25),
padding:responsiveSize(20),
borderRadius:responsiveSize(25),
backgroundColor:AppColor.cardColor,
elevation:10,
shadowColor:"#000",
shadowOpacity:.12,
shadowOffset:{
width:0,
height:responsiveSize(8),
},
shadowRadius:responsiveSize(15),
},

topRow:{
flexDirection:"row",
justifyContent:"space-between",
},

title:{
fontSize:responsiveSize(18),
fontWeight:"700",
color:AppColor.primaryText,
},

tag:{
paddingHorizontal:responsiveSize(14),
paddingVertical:responsiveSize(6),
borderRadius:responsiveSize(20),
backgroundColor:"#DDF8E8",
},

tagText:{
color:AppColor.successColor,
fontWeight:"700",
},

amount:{
marginTop:responsiveSize(15),
fontSize:responsiveSize(38),
fontWeight:"700",
color:"#0B2F9F",
},

subtitle:{
marginTop:responsiveSize(5),
fontSize:responsiveSize(15),
color:AppColor.lightBlack,
},

graphContainer:{
marginTop:responsiveSize(25),
height:responsiveSize(90),
flexDirection:"row",
alignItems:"flex-end",
justifyContent:"space-between",
},

bar:{
width:responsiveSize(22),
backgroundColor:AppColor.infoColor,
borderRadius:responsiveSize(20),
},

bottomRow:{
marginTop:responsiveSize(25),
flexDirection:"row",
justifyContent:"space-between",
},

label:{
fontSize:responsiveSize(14),
color:"#94A3B8",
},

green:{
marginTop:responsiveSize(6),
fontSize:responsiveSize(20),
fontWeight:"700",
color:AppColor.successColor,
},

blue:{
marginTop:responsiveSize(6),
fontSize:responsiveSize(20),
fontWeight:"700",
color:AppColor.infoColor,
},

});

export default getStyles;

import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

container:{
marginHorizontal:responsiveSize(20),
marginTop:responsiveSize(20),
backgroundColor:AppColor.cardColor,
borderRadius:responsiveSize(25),
padding:responsiveSize(20),
elevation:8,
shadowColor:"#000",
shadowOpacity:.08,
shadowOffset:{
width:0,
height:responsiveSize(5),
},
shadowRadius:responsiveSize(12),
},

header:{
flexDirection:"row",
alignItems:"center",
},

flexOne:{
flex:1,
},

aiIcon:{
height:responsiveSize(55),
width:responsiveSize(55),
borderRadius:responsiveSize(28),
backgroundColor:"#7C3AED",
justifyContent:"center",
alignItems:"center",
marginRight:responsiveSize(15),
},

title:{
fontSize:responsiveSize(20),
fontWeight:"700",
color:AppColor.primaryText,
},

subtitle:{
marginTop:responsiveSize(3),
color:AppColor.lightBlack,
},

live:{
paddingHorizontal:responsiveSize(10),
paddingVertical:responsiveSize(5),
backgroundColor:"#DCFCE7",
borderRadius:responsiveSize(20),
},

liveText:{
color:AppColor.successColor,
fontWeight:"700",
fontSize:responsiveSize(12),
},

item:{
marginTop:responsiveSize(20),
flexDirection:"row",
alignItems:"center",
},

text:{
marginLeft:responsiveSize(12),
fontSize:responsiveSize(15),
color:AppColor.lightBlack,
flex:1,
},

progressSection:{
marginTop:responsiveSize(25),
},

progressTop:{
flexDirection:"row",
justifyContent:"space-between",
},

progressTitle:{
fontSize:responsiveSize(15),
fontWeight:"600",
color:AppColor.primaryText,
},

percent:{
fontWeight:"700",
color:AppColor.infoColor,
},

progressBackground:{
marginTop:responsiveSize(10),
height:responsiveSize(10),
backgroundColor:"#E2E8F0",
borderRadius:responsiveSize(20),
},

progressFill:{
height:responsiveSize(10),
width:"82%",
borderRadius:responsiveSize(20),
backgroundColor:AppColor.infoColor,
},

button:{
marginTop:responsiveSize(25),
paddingVertical:responsiveSize(16),
borderRadius:responsiveSize(18),
justifyContent:"center",
alignItems:"center",
flexDirection:"row",
},

buttonText:{
marginLeft:responsiveSize(10),
fontSize:responsiveSize(16),
fontWeight:"700",
color:AppColor.white,
},

});

export default getStyles;

import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

container:{
marginHorizontal:responsiveSize(20),
marginTop:responsiveSize(20),
marginBottom:responsiveSize(30),
padding:responsiveSize(20),
backgroundColor:AppColor.cardColor,
borderRadius:responsiveSize(25),

elevation:8,

shadowColor:"#000",

shadowOpacity:.08,

shadowOffset:{
width:0,
height:responsiveSize(5),
},

shadowRadius:responsiveSize(10),

},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
},

left:{
flexDirection:"row",
alignItems:"center",
},

iconBox:{
height:responsiveSize(55),
width:responsiveSize(55),
borderRadius:responsiveSize(28),
backgroundColor:"#7C3AED",
justifyContent:"center",
alignItems:"center",
marginRight:responsiveSize(12),
},

title:{
fontSize:responsiveSize(16),
fontWeight:"700",
color:AppColor.primaryText,
},

subtitle:{
fontSize:responsiveSize(12),
color:AppColor.lightBlack,
},

priority:{
backgroundColor:"#FEE2E2",
paddingHorizontal:responsiveSize(12),
paddingVertical:responsiveSize(6),
borderRadius:responsiveSize(20),
},

priorityText:{
color:AppColor.errorColor,
fontWeight:"700",
fontSize:responsiveSize(12),
},

taskCard:{
marginTop:responsiveSize(20),
flexDirection:"row",
alignItems:"center",
},

content:{
marginLeft:responsiveSize(15),
},

taskTitle:{
fontWeight:"700",
fontSize:responsiveSize(14),
color:AppColor.primaryText,
},

taskSub:{
marginTop:responsiveSize(3),
fontSize:responsiveSize(14),
color:AppColor.lightBlack,
},

progressTop:{
marginTop:responsiveSize(20),
flexDirection:"row",
justifyContent:"space-between",
},

progressLabel:{
fontWeight:"600",
color:AppColor.primaryText,
},

progressValue:{
fontWeight:"700",
color:AppColor.infoColor,
},

progressBg:{
marginTop:responsiveSize(10),
height:responsiveSize(10),
backgroundColor:"#E2E8F0",
borderRadius:responsiveSize(20),
},

progressFill:{
height:responsiveSize(10),
width:"76%",
backgroundColor:AppColor.successColor,
borderRadius:responsiveSize(20),
},

aiCard:{
marginTop:responsiveSize(25),
padding:responsiveSize(18),
borderRadius:responsiveSize(18),
flexDirection:"row",
},

aiContent:{
marginLeft:responsiveSize(12),
flex:1,
},

aiTitle:{
fontWeight:"700",
fontSize:responsiveSize(14),
color:AppColor.white,
},

aiText:{
marginTop:responsiveSize(5),
color:AppColor.white,
lineHeight:responsiveSize(20),
fontSize:responsiveSize(12),
},

button:{
marginTop:responsiveSize(25),
paddingVertical:responsiveSize(16),
borderRadius:responsiveSize(18),
alignItems:"center",
},

buttonText:{
color:AppColor.white,
fontSize:responsiveSize(16),
fontWeight:"700",
},

});

export default getStyles;

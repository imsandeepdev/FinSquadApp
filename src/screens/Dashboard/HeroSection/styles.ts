import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (AppColor: ThemeColorType) =>
 StyleSheet.create({

container:{
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
overflow:"hidden",
},

topBody:{
padding:20,
paddingBottom:50
},  

top:{
flexDirection:"row",
justifyContent:"space-between",
},

greeting:{
fontSize:12,
color:"#fff",
},

name:{
fontSize:18,
fontWeight:"700",
color:"#fff",
marginTop:10,
},

role:{
fontSize:14,
color:"#D6E4FF",
marginTop:5,
},

empChip:{
marginTop:5,
paddingHorizontal:14,
paddingVertical:8,
borderRadius:25,
backgroundColor:"rgba(255,255,255,.1)",
alignSelf:"flex-start",
flexDirection:"row",
},

empText:{
color:"#fff",
fontSize:12,
marginLeft:5,
},

locationRow:{
marginTop:5,
flexDirection:"row",
},

location:{
color:"#D6E4FF",
marginLeft:5,
fontSize:12,
},

notification:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"rgba(255,255,255,.08)",
justifyContent:"center",
alignItems:"center",
},

badge:{
position:"absolute",
top:0,
right:0,
width:16,
height:16,
borderRadius:8,
backgroundColor:"#FF3B30",
justifyContent:"center",
alignItems:"center",
},

badgeText:{
color:"#fff",
fontWeight:"700",
fontSize:10,
},

middle:{
marginTop:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
},

profileWrap:{
width:90,
height:90,
borderRadius:50,
padding:3,
backgroundColor:"#7C3AED",
},

profile:{
width:"100%",
height:"100%",
borderRadius:45,
},

online:{
position:"absolute",
bottom:4,
right:10,
width:12,
height:12,
borderRadius:10,
backgroundColor:"#22C55E",
},

robot:{
width:140,
height:140,
justifyContent:"center",
alignItems:"center",
},

robotText:{
fontSize:90,
},

achievement:{
marginTop:10,
padding:15,
borderRadius:15,
backgroundColor:"rgba(255,255,255,.08)",
flexDirection:"row",
justifyContent:"space-between",
},

gold:{
color:"#FFD54F",
fontWeight:"700",
},

top10:{
color:"#fff",
},

divider:{
width:1,
backgroundColor:"rgba(255,255,255,.2)",
},

level:{
color:"#fff",
fontWeight:"700",
},

advisor:{
color:"#D6E4FF",
},

portfolio:{
marginHorizontal:0,
marginTop:-40,
marginRight: 15,
marginLeft:15,
},

portfolioGradient:{
borderRadius:16,
flexDirection:"row",
borderWidth:0.5,
borderColor: AppColor.appLightColor
},

wallet:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#c3c0c9",
justifyContent:"center",
alignItems:"center",
},

walletText:{
fontSize:20,
},

portfolioInfo:{
marginLeft:10,
},

portTitle:{
color:"#D6E4FF",
fontSize:14
},

amount:{
fontSize:16,
fontWeight:"700",
color:"#fff",
marginTop:4,
},

growthRow:{
marginTop:5,
flexDirection:"row",
alignItems:"center",
},

growth:{
backgroundColor:"#16A34A",
paddingHorizontal:4,
paddingVertical:4,
borderRadius:5,
},

growthText:{
color:"#fff",
fontWeight:"700",
fontSize:12
},

month:{
marginLeft:10,
color:"#D6E4FF",
},

particle1:{
position:"absolute",
width:5,
height:5,
borderRadius:3,
backgroundColor:"#fff",
top:30,
left:30,
},

particle2:{
position:"absolute",
width:8,
height:8,
borderRadius:4,
backgroundColor:"#60A5FA",
top:120,
right:120,
},

particle3:{
position:"absolute",
width:4,
height:4,
borderRadius:2,
backgroundColor:"#A78BFA",
top:200,
left:250,
},

});
import {StyleSheet} from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (AppColor: ThemeColorType) =>
 StyleSheet.create({

flexOne:{
flex:1,
},

profileRow:{
flexDirection:"row",
alignItems:"center",
},

infoWrap:{
marginHorizontal:responsiveSize(10),
},

container:{
borderBottomLeftRadius:responsiveSize(30),
borderBottomRightRadius:responsiveSize(30),
overflow:"hidden",
},

topBody:{
padding:responsiveSize(20),
},

top:{
flexDirection:"row",
justifyContent:"space-between",
},

greeting:{
fontSize:responsiveSize(12),
color:AppColor.white,
},

name:{
fontSize:responsiveSize(18),
fontWeight:"700",
color:"#999",
marginTop:responsiveSize(10),
},

role:{
fontSize:responsiveSize(14),
color:"#D6E4FF",
marginTop:responsiveSize(5),
},

empChip:{
marginTop:responsiveSize(5),
paddingHorizontal:responsiveSize(14),
paddingVertical:responsiveSize(8),
borderRadius:responsiveSize(25),
backgroundColor:"rgba(255,255,255,.1)",
alignSelf:"flex-start",
flexDirection:"row",
},

empText:{
color:AppColor.white,
fontSize:responsiveSize(12),
marginLeft:responsiveSize(5),
},

locationRow:{
marginTop:responsiveSize(5),
flexDirection:"row",
},

location:{
color:"#D6E4FF",
marginLeft:responsiveSize(5),
fontSize:responsiveSize(12),
},

notification:{
width:responsiveSize(40),
height:responsiveSize(40),
borderRadius:responsiveSize(20),
backgroundColor:"rgba(255,255,255,.08)",
justifyContent:"center",
alignItems:"center",
},

badge:{
position:"absolute",
top:responsiveSize(0),
right:responsiveSize(0),
width:responsiveSize(16),
height:responsiveSize(16),
borderRadius:responsiveSize(8),
backgroundColor:"#FF3B30",
justifyContent:"center",
alignItems:"center",
},

badgeText:{
color:AppColor.white,
fontWeight:"700",
fontSize:responsiveSize(10),
},

middle:{
marginTop:responsiveSize(20),
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
},

profileWrap:{
width:responsiveSize(90),
height:responsiveSize(90),
borderRadius:responsiveSize(50),
padding:responsiveSize(3),
backgroundColor:"#7C3AED",
},

profile:{
width:"100%",
height:"100%",
borderRadius:responsiveSize(45),
},

online:{
position:"absolute",
bottom:responsiveSize(4),
right:responsiveSize(10),
width:responsiveSize(12),
height:responsiveSize(12),
borderRadius:responsiveSize(10),
backgroundColor:"#22C55E",
},

robot:{
width:responsiveSize(140),
height:responsiveSize(140),
justifyContent:"center",
alignItems:"center",
},

robotText:{
fontSize:responsiveSize(90),
},

achievement:{
marginTop:responsiveSize(10),
padding:responsiveSize(15),
borderRadius:responsiveSize(15),
backgroundColor:"rgba(255,255,255,.08)",
flexDirection:"row",
justifyContent:"space-between",
},

gold:{
color:"#FFD54F",
fontWeight:"700",
},

top10:{
color:AppColor.white,
},

divider:{
width:responsiveSize(1),
backgroundColor:"rgba(255,255,255,.2)",
},

level:{
color:AppColor.white,
fontWeight:"700",
},

advisor:{
color:"#D6E4FF",
},

portfolio:{
marginHorizontal:responsiveSize(0),
marginTop:responsiveSize(-40),
marginRight:responsiveSize(15),
marginLeft:responsiveSize(15),
},

portfolioGradient:{
borderRadius:responsiveSize(16),
flexDirection:"row",
borderWidth:0.5,
borderColor: AppColor.appLightColor
},

wallet:{
width:responsiveSize(40),
height:responsiveSize(40),
borderRadius:responsiveSize(20),
backgroundColor:"#c3c0c9",
justifyContent:"center",
alignItems:"center",
},

walletText:{
fontSize:responsiveSize(20),
},

portfolioInfo:{
marginLeft:responsiveSize(10),
},

portTitle:{
color:"#D6E4FF",
fontSize:responsiveSize(14)
},

amount:{
fontSize:responsiveSize(16),
fontWeight:"700",
color:AppColor.white,
marginTop:responsiveSize(4),
},

growthRow:{
marginTop:responsiveSize(5),
flexDirection:"row",
alignItems:"center",
},

growth:{
backgroundColor:AppColor.successColor,
paddingHorizontal:responsiveSize(4),
paddingVertical:responsiveSize(4),
borderRadius:responsiveSize(5),
},

growthText:{
color:AppColor.white,
fontWeight:"700",
fontSize:responsiveSize(12)
},

month:{
marginLeft:responsiveSize(10),
color:"#D6E4FF",
},

particle1:{
position:"absolute",
width:responsiveSize(5),
height:responsiveSize(5),
borderRadius:responsiveSize(3),
backgroundColor:AppColor.white,
top:responsiveSize(30),
left:responsiveSize(30),
},

particle2:{
position:"absolute",
width:responsiveSize(8),
height:responsiveSize(8),
borderRadius:responsiveSize(4),
backgroundColor:"#60A5FA",
top:responsiveSize(120),
right:responsiveSize(120),
},

particle3:{
position:"absolute",
width:responsiveSize(4),
height:responsiveSize(4),
borderRadius:responsiveSize(2),
backgroundColor:"#A78BFA",
top:responsiveSize(200),
left:responsiveSize(250),
},


header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColor.appColor,
    paddingHorizontal: responsiveSize(16),
    paddingVertical: responsiveSize(10),
},

profileButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveSize(14),
    paddingVertical: responsiveSize(8),
    borderRadius: responsiveSize(20),
    backgroundColor: "rgba(255,255,255,0.15)",
},

profileButtonText: {
    color: AppColor.white,
    fontSize: responsiveSize(13),
    fontWeight: "600",
    marginRight: responsiveSize(4),
},

hideProfileBtn: {
    height: responsiveSize(36),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.12)",
    paddingHorizontal: responsiveSize(14),
    paddingVertical: responsiveSize(8),
    borderRadius: responsiveSize(22),
},

hideProfileText: {
    color: AppColor.white,
    fontWeight: "600",
    marginRight: responsiveSize(4),
},
});

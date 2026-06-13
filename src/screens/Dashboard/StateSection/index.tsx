import React from "react";

import {
View,
Text,
StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const data=[
{
icon:"people",
title:"Clients",
value:"128",
color:"#2563EB",
},
{
icon:"cash",
title:"Revenue",
value:"₹8.5L",
color:"#16A34A",
},
{
icon:"calendar",
title:"Meetings",
value:"12",
color:"#F59E0B",
},
{
icon:"trophy",
title:"Target",
value:"82%",
color:"#7C3AED",
},
];

const StatsSection=()=>{

return(

<View style={styles.container}>

<Text style={styles.heading}>

Today's Performance

</Text>

<View style={styles.row}>

{
data.map((item,index)=>{

return(

<View
key={index}
style={styles.card}
>

<View
style={[
styles.iconBox,
{
backgroundColor:item.color+"20"
}
]}
>

<Ionicons
name={item.icon}
size={24}
color={item.color}
/>

</View>

<Text style={styles.value}>

{item.value}

</Text>

<Text style={styles.title}>

{item.title}

</Text>

</View>

)

})
}

</View>

</View>

)

}

export default StatsSection;

const styles=StyleSheet.create({

container:{

marginHorizontal:20,

marginTop:20,

},

heading:{

fontSize:22,

fontWeight:"700",

color:"#071A52",

marginBottom:15,

},

row:{

flexDirection:"row",

flexWrap:"wrap",

justifyContent:"space-between",

},

card:{

width:"48%",

backgroundColor:"#fff",

borderRadius:22,

padding:18,

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

iconBox:{

height:50,

width:50,

borderRadius:25,

justifyContent:"center",

alignItems:"center",

},

value:{

fontSize:28,

fontWeight:"700",

marginTop:18,

color:"#071A52",

},

title:{

marginTop:8,

fontSize:15,

color:"#64748B",

},

});
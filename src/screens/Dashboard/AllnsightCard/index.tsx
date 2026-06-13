import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const AIInsightCard = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.aiIcon}>
          <Ionicons
            name="sparkles"
            size={24}
            color="#fff"
          />
        </View>

        <View style={{flex:1}}>
          <Text style={styles.title}>
            AI Assistant
          </Text>

          <Text style={styles.subtitle}>
            Smart Daily Insights
          </Text>
        </View>

        <View style={styles.live}>
          <Text style={styles.liveText}>
            LIVE
          </Text>
        </View>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="person"
          size={20}
          color="#3B82F6"
        />

        <Text style={styles.text}>
          3 HNI clients require follow-up.
        </Text>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="cash"
          size={20}
          color="#16A34A"
        />

        <Text style={styles.text}>
          Potential revenue ₹1.8 Lakh.
        </Text>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="trending-up"
          size={20}
          color="#F59E0B"
        />

        <Text style={styles.text}>
          SIP conversion probability 82%.
        </Text>

      </View>

      <View style={styles.progressSection}>

        <View style={styles.progressTop}>

          <Text style={styles.progressTitle}>
            Daily Productivity
          </Text>

          <Text style={styles.percent}>
            82%
          </Text>

        </View>

        <View style={styles.progressBackground}>

          <View style={styles.progressFill}/>

        </View>

      </View>

      <TouchableOpacity>

        <LinearGradient
          colors={[
            "#2563EB",
            "#3B82F6",
          ]}
          style={styles.button}
        >

          <Ionicons
            name="analytics"
            size={18}
            color="#fff"
          />

          <Text style={styles.buttonText}>
            View AI Report
          </Text>

        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};

export default AIInsightCard;

const styles = StyleSheet.create({

container:{

marginHorizontal:20,

marginTop:20,

backgroundColor:"#fff",

borderRadius:25,

padding:20,

elevation:8,

shadowColor:"#000",

shadowOpacity:.08,

shadowOffset:{
width:0,
height:5,
},

shadowRadius:12,

},

header:{

flexDirection:"row",

alignItems:"center",

},

aiIcon:{

height:55,

width:55,

borderRadius:28,

backgroundColor:"#7C3AED",

justifyContent:"center",

alignItems:"center",

marginRight:15,

},

title:{

fontSize:20,

fontWeight:"700",

color:"#071A52",

},

subtitle:{

marginTop:3,

color:"#64748B",

},

live:{

paddingHorizontal:10,

paddingVertical:5,

backgroundColor:"#DCFCE7",

borderRadius:20,

},

liveText:{

color:"#16A34A",

fontWeight:"700",

fontSize:12,

},

item:{

marginTop:20,

flexDirection:"row",

alignItems:"center",

},

text:{

marginLeft:12,

fontSize:15,

color:"#334155",

flex:1,

},

progressSection:{

marginTop:25,

},

progressTop:{

flexDirection:"row",

justifyContent:"space-between",

},

progressTitle:{

fontSize:15,

fontWeight:"600",

},

percent:{

fontWeight:"700",

color:"#2563EB",

},

progressBackground:{

marginTop:10,

height:10,

backgroundColor:"#E2E8F0",

borderRadius:20,

},

progressFill:{

height:10,

width:"82%",

borderRadius:20,

backgroundColor:"#2563EB",

},

button:{

marginTop:25,

paddingVertical:16,

borderRadius:18,

justifyContent:"center",

alignItems:"center",

flexDirection:"row",

},

buttonText:{

marginLeft:10,

fontSize:16,

fontWeight:"700",

color:"#fff",

},

});
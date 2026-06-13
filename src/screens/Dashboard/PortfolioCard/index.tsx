import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const PortfolioCard = () => {
  return (
    <LinearGradient
      colors={[
        "#ffffff",
        "#F8FBFF",
      ]}
      style={styles.container}
    >
      <View style={styles.topRow}>
        <Text style={styles.title}>
          Portfolio Managed
        </Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            +8.2%
          </Text>
        </View>
      </View>

      <Text style={styles.amount}>
        ₹12.4 Cr
      </Text>

      <Text style={styles.subtitle}>
        Total Assets Under Management
      </Text>

      {/* Fake Graph */}

      <View style={styles.graphContainer}>

        <View style={[styles.bar,{height:25}]}/>

        <View style={[styles.bar,{height:45}]}/>

        <View style={[styles.bar,{height:35}]}/>

        <View style={[styles.bar,{height:60}]}/>

        <View style={[styles.bar,{height:55}]}/>

        <View style={[styles.bar,{height:80}]}/>

        <View style={[styles.bar,{height:70}]}/>

      </View>

      <View style={styles.bottomRow}>

        <View>

          <Text style={styles.label}>
            Today's Growth
          </Text>

          <Text style={styles.green}>
            +₹2.8 Lakh
          </Text>

        </View>

        <View>

          <Text style={styles.label}>
            Target
          </Text>

          <Text style={styles.blue}>
            82%
          </Text>

        </View>

      </View>

    </LinearGradient>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({

container:{

marginHorizontal:20,

marginTop:-25,

padding:20,

borderRadius:25,

backgroundColor:"#fff",

elevation:10,

shadowColor:"#000",

shadowOpacity:.12,

shadowOffset:{
width:0,
height:8,
},

shadowRadius:15,

},

topRow:{

flexDirection:"row",

justifyContent:"space-between",

},

title:{

fontSize:18,

fontWeight:"700",

color:"#071A52",

},

tag:{

paddingHorizontal:14,

paddingVertical:6,

borderRadius:20,

backgroundColor:"#DDF8E8",

},

tagText:{

color:"#16A34A",

fontWeight:"700",

},

amount:{

marginTop:15,

fontSize:38,

fontWeight:"700",

color:"#0B2F9F",

},

subtitle:{

marginTop:5,

fontSize:15,

color:"#64748B",

},

graphContainer:{

marginTop:25,

height:90,

flexDirection:"row",

alignItems:"flex-end",

justifyContent:"space-between",

},

bar:{

width:22,

backgroundColor:"#3B82F6",

borderRadius:20,

},

bottomRow:{

marginTop:25,

flexDirection:"row",

justifyContent:"space-between",

},

label:{

fontSize:14,

color:"#94A3B8",

},

green:{

marginTop:6,

fontSize:20,

fontWeight:"700",

color:"#16A34A",

},

blue:{

marginTop:6,

fontSize:20,

fontWeight:"700",

color:"#2563EB",

},

});
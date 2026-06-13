import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const SmartTaskCard = () => {
  return (
    <View style={styles.container}>

      {/* Header */}

      <View style={styles.header}>

        <View style={styles.left}>

          <View style={styles.iconBox}>
            <Ionicons
              name="sparkles"
              size={24}
              color="#fff"
            />
          </View>

          <View>

            <Text style={styles.title}>
              AI Smart Tasks
            </Text>

            <Text style={styles.subtitle}>
              Priority for Today
            </Text>

          </View>

        </View>

        <View style={styles.priority}>

          <Text style={styles.priorityText}>
            HIGH
          </Text>

        </View>

      </View>

      {/* Meeting */}

      <View style={styles.taskCard}>

        <Ionicons
          name="people"
          size={22}
          color="#2563EB"
        />

        <View style={styles.content}>

          <Text style={styles.taskTitle}>
            HNI Client Meeting
          </Text>

          <Text style={styles.taskSub}>
            Rahul Sharma • 11:30 AM
          </Text>

        </View>

      </View>

      {/* SIP */}

      <View style={styles.taskCard}>

        <Ionicons
          name="cash"
          size={22}
          color="#16A34A"
        />

        <View style={styles.content}>

          <Text style={styles.taskTitle}>
            SIP Follow-up
          </Text>

          <Text style={styles.taskSub}>
            3 Pending Customers
          </Text>

        </View>

      </View>

      {/* Progress */}

      <View style={styles.progressTop}>

        <Text style={styles.progressLabel}>
          Daily Target
        </Text>

        <Text style={styles.progressValue}>
          76%
        </Text>

      </View>

      <View style={styles.progressBg}>
        <View style={styles.progressFill}/>
      </View>

      {/* AI Recommendation */}

      <LinearGradient
        colors={[
          "#7C3AED",
          "#2563EB",
        ]}
        style={styles.aiCard}
      >

        <Ionicons
          name="bulb"
          size={22}
          color="#fff"
        />

        <View style={{
          marginLeft:12,
          flex:1,
        }}>

          <Text style={styles.aiTitle}>
            AI Recommendation
          </Text>

          <Text style={styles.aiText}>
            Focus on SIP renewal clients today.
            Expected conversion rate 85%.
          </Text>

        </View>

      </LinearGradient>

      {/* Button */}

      <TouchableOpacity>

        <LinearGradient

          colors={[
            "#2563EB",
            "#1849D6",
          ]}

          style={styles.button}

        >

          <Text style={styles.buttonText}>
            View My Tasks
          </Text>

        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};

export default SmartTaskCard;

const styles = StyleSheet.create({

container:{
marginHorizontal:20,
marginTop:20,
marginBottom:30,
padding:20,
backgroundColor:"#fff",
borderRadius:25,

elevation:8,

shadowColor:"#000",

shadowOpacity:.08,

shadowOffset:{
width:0,
height:5,
},

shadowRadius:10,

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
height:55,
width:55,
borderRadius:28,
backgroundColor:"#7C3AED",
justifyContent:"center",
alignItems:"center",
marginRight:12,
},

title:{
fontSize:20,
fontWeight:"700",
color:"#071A52",
},

subtitle:{
color:"#64748B",
},

priority:{
backgroundColor:"#FEE2E2",
paddingHorizontal:12,
paddingVertical:6,
borderRadius:20,
},

priorityText:{
color:"#DC2626",
fontWeight:"700",
},

taskCard:{
marginTop:20,
flexDirection:"row",
alignItems:"center",
},

content:{
marginLeft:15,
},

taskTitle:{
fontWeight:"700",
fontSize:16,
color:"#071A52",
},

taskSub:{
marginTop:3,
color:"#64748B",
},

progressTop:{
marginTop:25,
flexDirection:"row",
justifyContent:"space-between",
},

progressLabel:{
fontWeight:"600",
},

progressValue:{
fontWeight:"700",
color:"#2563EB",
},

progressBg:{
marginTop:10,
height:10,
backgroundColor:"#E2E8F0",
borderRadius:20,
},

progressFill:{
height:10,
width:"76%",
backgroundColor:"#16A34A",
borderRadius:20,
},

aiCard:{
marginTop:25,
padding:18,
borderRadius:18,
flexDirection:"row",
},

aiTitle:{
fontWeight:"700",
fontSize:16,
color:"#fff",
},

aiText:{
marginTop:5,
color:"#fff",
lineHeight:20,
},

button:{
marginTop:25,
paddingVertical:16,
borderRadius:18,
alignItems:"center",
},

buttonText:{
color:"#fff",
fontSize:16,
fontWeight:"700",
},

});
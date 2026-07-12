import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const data = [
  {
    icon: "time-outline",          // Due today
    title: "Today's Due",
    value: "128",
    color: "#2563EB",
  },
  {
    icon: "wallet-outline",        // Money collected today
    title: "Today's Collection",
    value: "₹8.5L",
    color: "#16A34A",
  },
  {
    icon: "document-text-outline", // Total due accounts/cases
    title: "Total Today's Due",
    value: "12",
    color: "#F59E0B",
  },
  {
    icon: "cash-outline",          // Total amount collected
    title: "Total Today's Collection",
    value: "82%",
    color: "#7C3AED",
  },
];

const StatsSection = () => {

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>
        {'Today\'s Performance'}
      </Text>

      <View style={styles.row}>
        {
          data.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.card}
              >
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                  <View
                    style={[
                      styles.iconBox,
                      {
                        backgroundColor: item.color + "20"
                      }
                    ]}
                  >
                    <Ionicons
                      name={item.icon}
                      size={24}
                      color={item.color}
                    />
                  </View>

                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={styles.value}>
                      {item.value}
                    </Text>
                    <Text style={styles.title} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default StatsSection;

const styles = StyleSheet.create({

  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  heading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#071A52",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
  },

  iconBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  value: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 2,
    color: "#071A52",
  },

  title: {
    marginTop: 4,
    fontSize: 12,
    color: "#64748B",
  },

});
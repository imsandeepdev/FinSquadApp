import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColor } from "../../../../res";

interface Props {
  total: number;
  active: number;
  inactive: number;
}

const SummaryItem = ({
  icon,
  color,
  value,
  title,
}: {
  icon: string;
  color: string;
  value: number;
  title: string;
}) => (
  <View style={styles.item}>
    <View style={[styles.iconContainer, { backgroundColor: color + "20" }]}>
      <Ionicons name={icon} size={14} color={color} />
    </View>
    <View style={{marginLeft:10}}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const BottomSummary = ({
  total,
  active,
  inactive,
}: Props) => {
  return (
    <View style={styles.container}>
      <SummaryItem
        icon="people"
        color={AppColor.appColor}
        value={total}
        title="Total"
      />
      <View style={{borderWidth:0.5, height:40, borderColor:"#999"}}/>

      <SummaryItem
        icon="checkmark-circle"
        color={AppColor.successColor}
        value={active}
        title="Active"
      />
      <View style={{borderWidth:0.5, height:40, borderColor:"#999"}}/>

      <SummaryItem
        icon="close-circle"
        color={AppColor.errorColor}
        value={inactive}
        title="Inactive"
      />
    </View>
  );
};

export default React.memo(BottomSummary);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColor.white,
    paddingTop: 10,
    paddingBottom:18,
    borderTopWidth: 1,
    borderColor: AppColor.borderColor,
    elevation: 10,
  },

  item: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"center",
  },

  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  value: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: AppColor.primaryText,
    textAlign:"center"
  },

  title: {
    marginTop: 2,
    fontSize: 10,
    color: AppColor.secAppText,
  },
});
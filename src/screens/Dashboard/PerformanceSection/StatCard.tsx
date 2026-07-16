import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "../../../utils/provider/themeProvider";

interface Props{
    icon:any;
    iconBackground:string;
    title:string;
    value:string;
    change:string;
    subtitle:string;
}

const StatCard=({
icon,
iconBackground,
title,
value,
change,
subtitle,
}:Props)=>{

const { theme: { themeColor } } = useTheme();
const styles = getStyles(themeColor);

return(
<View style={styles.card}>
    <View style={styles.rowFlex}>
        <View
            style={[
            styles.iconContainer,
            {backgroundColor:iconBackground}
            ]}
            >
            {icon}
        </View>

        <View style={styles.infoWrap}>
            <Text style={styles.title} numberOfLines={2}>
            {title}
            </Text>
            <Text style={styles.value} numberOfLines={1}>
            {value}
            </Text>
        </View>
    </View>

    <View style={styles.bottomRow}>
        <View style={styles.changeContainer}>
            <Text style={styles.change}>
            ↑ {change}
            </Text>
        </View>
        <Text style={styles.subtitle} numberOfLines={1}>
        {subtitle}
        </Text>
    </View>
</View>
)}

export default StatCard;

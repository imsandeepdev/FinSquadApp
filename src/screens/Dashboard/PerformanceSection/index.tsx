import React from "react";
import {
View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import StatCard from "./StatCard";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

const PerformanceSection=()=>{

const { theme: { themeColor } } = useTheme();
const styles = getStyles(themeColor);

return(
<View style={styles.container}>
    <StatCard 
    icon={
        <Icon
        name="people"
        size={18}
        color="#fff"
        />
    }
    iconBackground={themeColor.appColor}
    title="Total Clients"
    value="20"
    change="12%"
    subtitle="yesterday"
    />
<View style={styles.divider}/>
    <StatCard
    icon={
    <Icon
    name="trending-up"
    size={18}
    color={themeColor.white}
    />
    }
    iconBackground={themeColor.successColor}
    title="Revenue (MTD)"
    value="₹85.6K"
    change="15.3%"
    subtitle="last month"
    />
<View style={styles.divider}/>
    <StatCard
    icon={
    <Icon
    name="calendar"
    size={18}
    color={themeColor.white}
    />
    }
    iconBackground="#FF8A1F"
    title="Today's Meetings"
    value="06"
    change=""
    subtitle="Upcoming"
    />
</View>
)

}

export default PerformanceSection;
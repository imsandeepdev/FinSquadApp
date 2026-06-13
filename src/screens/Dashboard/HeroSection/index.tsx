import React from "react";

import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

const HeroSection=()=>{
const { theme: { themeColor } } = useTheme();
const styles = getStyles(themeColor);
const gridientColor = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor]
const portfolioGridientColor = [themeColor.secAppColor, themeColor.appColor]


return(

<View>
<LinearGradient
    colors={gridientColor}
    start={{x:0,y:0}}
    end={{x:1,y:1,}}
    style={styles.container}
>

    <View style={styles.particle1}/>
    <View style={styles.particle2}/>
    <View style={styles.particle3}/>
    <View style={styles.topBody}>
        <View style={styles.top}>
        <View style={{flex:1}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>

        <View style={styles.profileWrap}>
            <Image
            source={{
            uri:"https://i.pravatar.cc/200"
            }}
            style={styles.profile}
            />
            <View style={styles.online}/>
        </View>

        <View style={{marginHorizontal:10}}>
        <Text style={styles.greeting}> {'Good Morning ☀️'}</Text>
        <Text style={styles.name}>{'Riya Nandi'}</Text>
        <Text style={styles.role}>{'Senior Relationship Manager'}</Text>
        <View style={styles.empChip}>
            <Icon
                name="lock-closed"
                size={12}
                color="#fff"
            />
            <Text style={styles.empText}>{'EMP102345'}</Text>
        </View>

        <View style={styles.locationRow}>
            <Icon
                name="location-outline"
                size={14}
                color="#e9eaef"
            />
            <Text style={styles.location}>{'Varanasi Branch'}</Text>
        </View>
        </View>
        </View>

        <View style={styles.achievement}>
            <View>
                <Text style={styles.gold}>{'🏆 Gold Performer'}</Text>
                <Text style={styles.top10}>{'Top 10%'}</Text>
            </View>
            <View style={styles.divider}/>
            <View>
                <Text style={styles.level}>{'⚡ Level 4'}</Text>
                <Text style={styles.advisor}>{'Pro Advisor'}</Text>
            </View>
        </View>

        </View>

        <TouchableOpacity style={styles.notification}>
            <Icon
            name="notifications-outline"
            size={20}
            color="#fff"
            />
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{'3'}</Text>
            </View>
        </TouchableOpacity>

        </View>
    </View>
</LinearGradient>

<View style={styles.portfolio}>
    <LinearGradient
    colors={portfolioGridientColor}
    style={styles.portfolioGradient}
    >
        <View style={{flexDirection:"row", padding:10,}}>
            <View style={styles.wallet}>
                <Text style={styles.walletText}>💳</Text>
            </View>
            <View style={styles.portfolioInfo}>
                <Text style={styles.portTitle}>
                {'Portfolio Managed'}
                </Text>
                <Text style={styles.amount}>
                {'₹12.45 Cr'}
                </Text>
                <View style={styles.growthRow}>
                    <View style={styles.growth}>
                        <Text style={styles.growthText}>
                        {'↑ 8.24%'}
                        </Text>
                    </View>
                    <Text style={styles.month}>
                    {'vs last month'}
                    </Text>
                </View>
            </View>
        </View>
    </LinearGradient>
</View>

</View>

)

}

export default HeroSection;
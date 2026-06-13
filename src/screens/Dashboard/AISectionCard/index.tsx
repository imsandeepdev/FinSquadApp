import React from 'react';

import {
View,
Text,
TouchableOpacity,
Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../../utils/provider/themeProvider';
import { getStyles } from './styles';

const AISectionCard=()=>{

const { theme: { themeColor } } = useTheme();
const styles = getStyles(themeColor);
const gridSection = [themeColor.appColor, themeColor.appColor]

return(
    <View style={styles.viewContainer}>
    <LinearGradient
    colors={gridSection}
    >
    <View style={{paddingHorizontal:10, paddingVertical:6}}>
    <View style={styles.header}>

        <View style={styles.leftHeader}>

        <Icon
        name="sparkles"
        size={12}
        color={themeColor.secAppColor}
        />

        <Text style={styles.heading}>
        AI Insight
        </Text>

        </View>
        {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
            {'View'}
            </Text>
            <Icon
            name="chevron-forward"
            size={12}
            color={themeColor.primaryText}
            />
        </TouchableOpacity> */}

    </View>

    <View style={styles.content}>
        <View style={styles.aiCircle}>
            <Text style={styles.aiText}>
            AI
            </Text>
        </View>

        <View style={styles.textContainer}>

        <Text style={styles.title}>
        {'3 HNI clients are due for follow-up today.'}
        </Text>

        <Text style={styles.subtitle}>
        {'Engage now to improve your conversion by'}
        <Text style={styles.green}>
        {'27%'}
        </Text>
        </Text>
        </View>
        
    </View>

    </View>
    </LinearGradient>
    </View>
)}

export default AISectionCard;
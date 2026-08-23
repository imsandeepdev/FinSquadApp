import React, { useMemo } from 'react';

import {
  View,
  Text,
  Pressable,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../utils/provider/themeProvider';
import { getStyles } from './styles';
import { responsiveSize } from '../../../res';
import { centres } from '../../CentreManagement/const';

const AISectionCard = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const gradientColors = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor];

  // Same signal the full AI Insights tab leads with (lowest repayment health
  // centre) — this card is a live preview of it, not a separate fake stat.
  const weakestCentre = useMemo(
    () => [...centres].sort((a, b) => a.repaymentHealthScore - b.repaymentHealthScore)[0],
    []
  );

  const onViewAll = () => {
    navigation.navigate('AI');
  };

  return (
    <Pressable style={styles.viewContainer} onPress={onViewAll}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientFill}
      >
        <View style={styles.contentPad}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <View style={styles.iconBadge}>
                <Icon
                  name="sparkles"
                  size={responsiveSize(13)}
                  color={themeColor.white}
                />
              </View>

              <Text style={styles.heading}>
                AI INSIGHT
              </Text>
            </View>

            <Pressable style={styles.button} onPress={onViewAll}>
              <Text style={styles.buttonText}>
                View All
              </Text>
              <Icon
                name="chevron-forward"
                size={responsiveSize(12)}
                color={themeColor.white}
              />
            </Pressable>
          </View>

          <View style={styles.content}>
            <View style={styles.aiCircle}>
              <Icon
                name="people"
                size={responsiveSize(18)}
                color={themeColor.appColor}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {weakestCentre.name} needs attention
              </Text>

              <Text style={styles.subtitle} numberOfLines={2}>
                {'Repayment health dropped to '}
                <Text style={styles.highlight}>
                  {weakestCentre.repaymentHealthScore}/100
                </Text>
                {' — tap to view all AI insights.'}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default AISectionCard;

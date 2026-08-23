import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LineChart } from "react-native-gifted-charts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, StoryScreen } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { AGENT_PROFILE } from "../const";
import {
  PERFORMANCE_KPIS,
  COLLECTION_EFFICIENCY_TREND,
  ACHIEVEMENTS,
  LEVEL_PROGRESS,
} from "./const";
import { getStyles } from "./styles";

const CHART_INITIAL_SPACING = 14;
const CHART_END_SPACING = 14;

const MyPerformanceScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [chartWidth, setChartWidth] = useState(0);

  const gradientColors = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor];

  const trendData = COLLECTION_EFFICIENCY_TREND.map((item) => ({
    value: item.value,
    label: item.label,
    dataPointText: String(item.value),
  }));

  const chartSpacing = chartWidth > 0 && trendData.length > 1
    ? (chartWidth - CHART_INITIAL_SPACING - CHART_END_SPACING) / (trendData.length - 1)
    : 0;

  const renderPointerTooltip = (item: { value: number; label?: string }) => (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipText}>
        {item?.label}: {item?.value}%
      </Text>
    </View>
  );

  return (
    <StoryScreen>
      <AppHeader
        title="My Performance"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroTopRow}>
            <View style={styles.heroTierWrap}>
              <Text style={styles.heroTierLabel} numberOfLines={1}>
                {AGENT_PROFILE.tierLabel}
              </Text>
              <Text style={styles.heroTierSub} numberOfLines={1}>
                {AGENT_PROFILE.tierSub}
              </Text>
            </View>

            <View style={styles.heroLevelChip}>
              <Text style={styles.heroLevelChipText} numberOfLines={1}>
                {AGENT_PROFILE.levelLabel}
              </Text>
            </View>
          </View>

          <View style={styles.progressLabelRow}>
            <Text style={styles.progressLabelText} numberOfLines={1}>
              {LEVEL_PROGRESS.currentLevelLabel}
            </Text>
            <Text
              style={[styles.progressLabelText, styles.progressLabelTextRight]}
              numberOfLines={1}
            >
              {LEVEL_PROGRESS.pointsToNext} pts to {LEVEL_PROGRESS.nextLevelLabel}
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${LEVEL_PROGRESS.progressPercent}%` }]} />
          </View>
        </LinearGradient>

        <View style={styles.kpiGrid}>
          {PERFORMANCE_KPIS.map((kpi) => (
            <View style={styles.kpiCard} key={kpi.id}>
              <View style={[styles.kpiIconWrap, { backgroundColor: kpi.color + "20" }]}>
                <Ionicons name={kpi.icon} size={16} color={kpi.color} />
              </View>

              <Text style={styles.kpiValue}>{kpi.value}</Text>
              <Text style={styles.kpiLabel}>{kpi.label}</Text>

              <View style={styles.kpiTrendRow}>
                <Ionicons
                  name={kpi.isPositive ? "trending-up" : "trending-down"}
                  size={11}
                  color={kpi.isPositive ? themeColor.successColor : themeColor.errorColor}
                />
                <Text
                  style={[
                    styles.kpiTrendText,
                    { color: kpi.isPositive ? themeColor.successColor : themeColor.errorColor },
                  ]}
                >
                  {kpi.trend}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collection Efficiency Trend</Text>
          <Text style={styles.cardTitleSub}>Last 6 months</Text>

          <View
            style={styles.chartWrap}
            onLayout={(e) => setChartWidth(e.nativeEvent.layout.width)}
          >
            {chartWidth > 0 && (
              <LineChart
                data={trendData}
                width={chartWidth}
                height={140}
                spacing={chartSpacing}
                initialSpacing={CHART_INITIAL_SPACING}
                endSpacing={CHART_END_SPACING}
                disableScroll
                thickness={2.5}
                color={themeColor.appColor}
                curved
                areaChart
                startFillColor={themeColor.appColor}
                endFillColor={themeColor.appColor}
                startOpacity={0.25}
                endOpacity={0.02}
                dataPointsColor={themeColor.appColor}
                dataPointsRadius={3.5}
                rulesType="dashed"
                rulesColor={themeColor.borderColor}
                dashWidth={4}
                dashGap={4}
                noOfSections={4}
                xAxisThickness={0}
                yAxisThickness={0}
                hideYAxisText
                xAxisLabelTextStyle={styles.chartAxisLabel}
                pointerConfig={{
                  pointerStripHeight: 140,
                  pointerStripColor: themeColor.borderColor,
                  pointerStripWidth: 1,
                  pointerColor: themeColor.appColor,
                  radius: 5,
                  pointerLabelWidth: 100,
                  pointerLabelHeight: 40,
                  activatePointersOnLongPress: false,
                  autoAdjustPointerLabelPosition: true,
                  pointerLabelComponent: renderPointerTooltip,
                }}
                isAnimated
              />
            )}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Achievements</Text>
          <Text style={styles.cardTitleSub}>Badges earned for consistent performance</Text>

          {ACHIEVEMENTS.map((achievement, index) => (
            <React.Fragment key={achievement.id}>
              <View style={styles.achievementRow}>
                <View
                  style={[
                    styles.achievementIconWrap,
                    { backgroundColor: achievement.earned ? achievement.color + "20" : themeColor.borderColor },
                  ]}
                >
                  <Ionicons
                    name={achievement.icon}
                    size={17}
                    color={achievement.earned ? achievement.color : themeColor.placeHolder}
                  />
                </View>

                <View style={styles.achievementTextWrap}>
                  <Text
                    style={[styles.achievementTitle, !achievement.earned && styles.achievementTitleLocked]}
                  >
                    {achievement.title}
                  </Text>
                  <Text style={styles.achievementSubtitle}>{achievement.subtitle}</Text>
                </View>

                {achievement.earned ? (
                  <Ionicons name="checkmark-circle" size={18} color={themeColor.successColor} />
                ) : (
                  <Text style={styles.achievementLockedBadge}>Locked</Text>
                )}
              </View>

              {index < ACHIEVEMENTS.length - 1 && <View style={styles.achievementDivider} />}
            </React.Fragment>
          ))}
        </View>

      </ScrollView>
    </StoryScreen>
  );
};

export default MyPerformanceScreen;

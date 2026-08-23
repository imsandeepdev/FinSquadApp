import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import {
  REPORT_PERIODS,
  REPORT_DATA_BY_PERIOD,
  REPORT_CATEGORIES,
  ReportCategory,
} from "./const";

const CHART_INITIAL_SPACING = 14;
const CHART_END_SPACING = 14;

const ReportScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [selectedPeriod, setSelectedPeriod] = useState(REPORT_PERIODS[1].id);
  const [chartWidth, setChartWidth] = useState(0);

  const periodData = REPORT_DATA_BY_PERIOD[selectedPeriod];
  const { kpis, collectionTrend } = periodData;

  const latestIndex = collectionTrend.length - 1;
  const latestValue = collectionTrend[latestIndex].value;
  const previousValue = collectionTrend[latestIndex - 1]?.value ?? latestValue;
  const trendPct = previousValue ? Math.round(((latestValue - previousValue) / previousValue) * 100) : 0;
  const isTrendUp = trendPct >= 0;

  const collectedData = collectionTrend.map((item) => ({
    value: item.value,
    label: item.label,
    dataPointText: String(item.value),
  }));

  const overdueData = collectionTrend.map((item) => ({
    value: item.overdue,
  }));

  // Spread the points across the full measured card width instead of a
  // fixed spacing, so the chart always fills the card regardless of
  // how many points the selected period has.
  const chartSpacing = chartWidth > 0 && collectedData.length > 1
    ? (chartWidth - CHART_INITIAL_SPACING - CHART_END_SPACING) / (collectedData.length - 1)
    : 0;

  const renderPointerTooltip = (collectedItem: { value: number; label?: string }, overdueItems: { value: number }[]) => (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipMonth}>{collectedItem?.label}</Text>

      <View style={styles.tooltipRow}>
        <View style={[styles.tooltipDot, { backgroundColor: themeColor.appColor }]} />
        <Text style={styles.tooltipLabel}>Collected</Text>
        <Text style={styles.tooltipValue}>₹{collectedItem?.value}L</Text>
      </View>

      <View style={styles.tooltipRow}>
        <View style={[styles.tooltipDot, { backgroundColor: themeColor.errorColor }]} />
        <Text style={styles.tooltipLabel}>Overdue</Text>
        <Text style={styles.tooltipValue}>₹{overdueItems?.[0]?.value}L</Text>
      </View>
    </View>
  );

  const onDownload = (category: ReportCategory) => {
    Alert.alert(
      category.title,
      "This report is being prepared and will be shared once ready."
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Reports"
        leftIcon={null}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.headerRow}>
          <Text style={styles.screenSubtitle}>
            Portfolio, collection & performance summaries
          </Text>
        </View>

        <View style={styles.periodRow}>
          {REPORT_PERIODS.map((period) => {
            const active = period.id === selectedPeriod;
            return (
              <Pressable
                key={period.id}
                style={[styles.periodChip, active && styles.periodChipActive]}
                onPress={() => setSelectedPeriod(period.id)}
              >
                <Text style={[styles.periodChipText, active && styles.periodChipTextActive]}>
                  {period.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.kpiGrid}>
          {kpis.map((kpi) => (
            <View style={styles.kpiCard} key={kpi.id}>
              <View style={[styles.kpiIconWrap, { backgroundColor: kpi.color + "20" }]}>
                <Ionicons name={kpi.icon} size={16} color={kpi.color} />
              </View>

              <Text style={styles.kpiValue}>
                {kpi.value}
              </Text>

              <Text style={styles.kpiLabel}>
                {kpi.label}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <View>
              <Text style={styles.cardTitle}>
                Collection Trend
              </Text>
              <Text style={styles.cardTitleSub}>
                {periodData.subtitle}
              </Text>
            </View>

            <View style={[styles.trendBadge, { backgroundColor: (isTrendUp ? themeColor.successColor : themeColor.errorColor) + "1A" }]}>
              <Ionicons
                name={isTrendUp ? "trending-up" : "trending-down"}
                size={13}
                color={isTrendUp ? themeColor.successColor : themeColor.errorColor}
              />
              <Text style={[styles.trendBadgeText, { color: isTrendUp ? themeColor.successColor : themeColor.errorColor }]}>
                {isTrendUp ? "+" : ""}{trendPct}%
              </Text>
            </View>
          </View>

          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: themeColor.appColor }]} />
              <Text style={styles.legendLabel}>Collected</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: themeColor.errorColor }]} />
              <Text style={styles.legendLabel}>Overdue</Text>
            </View>
          </View>

          <View
            style={styles.chartWrap}
            onLayout={(e) => setChartWidth(e.nativeEvent.layout.width)}
          >
            {chartWidth > 0 && (
              <LineChart
                key={selectedPeriod}
                data={collectedData}
                data2={overdueData}
                width={chartWidth}
                height={160}
                spacing={chartSpacing}
                initialSpacing={CHART_INITIAL_SPACING}
                endSpacing={CHART_END_SPACING}
                disableScroll
                thickness={2.5}
                thickness2={1.5}
                color={themeColor.appColor}
                color2={themeColor.errorColor}
                curved
                areaChart
                startFillColor={themeColor.appColor}
                endFillColor={themeColor.appColor}
                startOpacity={0.25}
                endOpacity={0.02}
                hideDataPoints2
                dataPointsColor={themeColor.appColor}
                dataPointsRadius={3.5}
                hideRules={false}
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
                  pointerStripHeight: 160,
                  pointerStripColor: themeColor.borderColor,
                  pointerStripWidth: 1,
                  pointerColor: themeColor.appColor,
                  radius: 5,
                  pointerLabelWidth: 130,
                  pointerLabelHeight: 90,
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
          <Text style={styles.cardTitle}>
            Report Categories
          </Text>

          {REPORT_CATEGORIES.map((category, index) => (
            <React.Fragment key={category.id}>
              <Pressable
                style={styles.categoryRow}
                onPress={() => onDownload(category)}
              >
                <View style={styles.categoryIconWrap}>
                  <Ionicons name={category.icon} size={17} color={themeColor.appColor} />
                </View>

                <View style={styles.categoryTextWrap}>
                  <Text style={styles.categoryTitle} numberOfLines={1}>
                    {category.title}
                  </Text>
                  <Text style={styles.categorySubtitle} numberOfLines={1}>
                    {category.subtitle}
                  </Text>
                </View>

                <View style={styles.downloadAction}>
                  <Ionicons name="download-outline" size={12} color={themeColor.appColor} />
                  <Text style={styles.downloadActionText}>
                    Download
                  </Text>
                </View>
              </Pressable>

              {index < REPORT_CATEGORIES.length - 1 && <View style={styles.categoryDivider} />}
            </React.Fragment>
          ))}
        </View>

      </ScrollView>
    </StoryScreen>
  );
};

export default ReportScreen;

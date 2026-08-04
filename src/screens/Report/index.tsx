import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import {
  REPORT_PERIODS,
  REPORT_KPIS,
  COLLECTION_TREND,
  REPORT_CATEGORIES,
  ReportCategory,
} from "./const";

const ReportScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [selectedPeriod, setSelectedPeriod] = useState(REPORT_PERIODS[1].id);

  const chartData = COLLECTION_TREND.map((item) => ({
    value: item.value,
    label: item.label,
    frontColor: themeColor.appColor,
  }));

  const onDownload = (category: ReportCategory) => {
    Alert.alert(
      category.title,
      "This report is being prepared and will be shared once ready."
    );
  };

  return (
    <StoryScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.headerRow}>
          <Text style={styles.screenTitle}>
            Reports
          </Text>
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
          {REPORT_KPIS.map((kpi) => (
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
            <Text style={styles.cardTitle}>
              Collection Trend
            </Text>

            <Text style={styles.cardTitleSub}>
              ₹ in Lakhs
            </Text>
          </View>

          <View style={styles.chartWrap}>
            <BarChart
              data={chartData}
              height={160}
              barWidth={22}
              spacing={22}
              initialSpacing={16}
              roundedTop
              hideRules
              xAxisThickness={0}
              yAxisThickness={0}
              hideYAxisText
              noOfSections={4}
              isAnimated
            />
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

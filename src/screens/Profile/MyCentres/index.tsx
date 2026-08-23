import React from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, StoryScreen } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { centres } from "../../CentreManagement/const";
import { Centre } from "../../CentreManagement/types";
import { getStyles } from "./styles";

const healthColor = (score: number, themeColor: ThemeColorType) => {
  if (score >= 80) return themeColor.successColor;
  if (score >= 65) return "#F59E0B";
  return themeColor.errorColor;
};

const MyCentresScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const totalCentres = centres.length;
  const totalMembers = centres.reduce((sum, c) => sum + c.memberCount, 0);
  const activeCentres = centres.filter((c) => c.status === "ACTIVE").length;

  const onCentrePress = (centre: Centre) => {
    Alert.alert(centre.name, "Centre details screen is coming soon.");
  };

  return (
    <StoryScreen>
      <AppHeader
        title="My Centres"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalCentres}</Text>
            <Text style={styles.summaryLabel}>Total Centres</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalMembers}</Text>
            <Text style={styles.summaryLabel}>Total Members</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{activeCentres}</Text>
            <Text style={styles.summaryLabel}>Active Centres</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>All Centres</Text>

        {centres.map((centre) => {
          const memberPercent = Math.min(
            100,
            Math.round((centre.memberCount / centre.targetMemberCount) * 100)
          );
          const isActive = centre.status === "ACTIVE";
          const health = healthColor(centre.repaymentHealthScore, themeColor);

          return (
            <Pressable
              key={centre.id}
              style={styles.centreCard}
              onPress={() => onCentrePress(centre)}
            >
              <View style={styles.centreTopRow}>
                <View style={styles.centreNameWrap}>
                  <Text style={styles.centreName} numberOfLines={1}>
                    {centre.name}
                  </Text>
                  <Text style={styles.centreCode}>{centre.code}</Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: (isActive ? themeColor.successColor : "#F59E0B") + "1A" },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusBadgeText,
                      { color: isActive ? themeColor.successColor : "#F59E0B" },
                    ]}
                  >
                    {isActive ? "Active" : "Forming"}
                  </Text>
                </View>
              </View>

              <View style={styles.centreMetaRow}>
                <Ionicons name="location-outline" size={13} color={themeColor.placeHolder} />
                <Text style={styles.centreMetaText}>{centre.village}</Text>

                <Ionicons name="calendar-outline" size={13} color={themeColor.placeHolder} />
                <Text style={styles.centreMetaText}>{centre.meetingDay}</Text>
              </View>

              <View style={styles.memberProgressRow}>
                <Text style={styles.memberProgressLabel}>Members</Text>
                <Text style={styles.memberProgressValue}>
                  {centre.memberCount}/{centre.targetMemberCount}
                </Text>
              </View>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${memberPercent}%`, backgroundColor: themeColor.appColor },
                  ]}
                />
              </View>

              <View style={styles.healthRow}>
                <View style={styles.healthLabelRow}>
                  <Ionicons name="pulse-outline" size={14} color={themeColor.placeHolder} />
                  <Text style={styles.healthLabel}>Repayment Health</Text>
                </View>

                <Text style={[styles.healthValue, { color: health }]}>
                  {centre.repaymentHealthScore}/100
                </Text>
              </View>
            </Pressable>
          );
        })}

      </ScrollView>
    </StoryScreen>
  );
};

export default MyCentresScreen;

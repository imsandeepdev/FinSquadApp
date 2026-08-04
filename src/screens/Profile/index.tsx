import React from "react";
import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppButton, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { useRole, ROLE_LABELS } from "../../utils/provider/roleProvider";
import { reset } from "../../appNavigator/navigationService";
import { NAVIGATE_NAME } from "../../utils/const";
import { getStyles } from "./styles";
import {
  AGENT_PROFILE,
  PROFILE_STATS,
  WORK_INFO,
  MENU_SECTIONS,
  ProfileMenuItem,
} from "./const";

const ProfileScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { role } = useRole();

  const roleLabel = role ? ROLE_LABELS[role] : AGENT_PROFILE.role;
  const gradientColors = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor];

  const onMenuPress = (item: ProfileMenuItem) => {
    Alert.alert(item.label, "This will be available soon.");
  };

  const onLogout = () => {
    Alert.alert(
      "Log out?",
      "You will need to sign in again to access your account.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Log out",
          style: "destructive",
          onPress: () => reset(NAVIGATE_NAME.LOGIN),
        },
      ]
    );
  };

  return (
    <StoryScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.heroCard}>
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradientFill}
          />

          <View style={styles.heroCardContent}>
            <View style={styles.heroTopRow}>
              <View style={styles.avatarWrap}>
                <Image
                  source={{ uri: AGENT_PROFILE.avatarUri }}
                  style={styles.avatarImage}
                />
                <View style={styles.onlineDot} />
              </View>

              <View style={styles.heroInfo}>
                <Text style={styles.heroName} numberOfLines={1}>
                  {AGENT_PROFILE.name}
                </Text>

                <Text style={styles.heroRole} numberOfLines={1}>
                  {roleLabel}
                </Text>

                <View style={styles.empChip}>
                  <Ionicons name="lock-closed" size={12} color={themeColor.white} />
                  <Text style={styles.empChipText} numberOfLines={1}>
                    {AGENT_PROFILE.employeeId}
                  </Text>
                </View>

                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={13} color="#D6E4FF" />
                  <Text style={styles.locationText} numberOfLines={1}>
                    {AGENT_PROFILE.branch}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.achievementRow}>
              <View style={styles.achievementItem}>
                <Text style={styles.achievementLabel} numberOfLines={1}>
                  {AGENT_PROFILE.tierLabel}
                </Text>
                <Text style={styles.achievementSub} numberOfLines={1}>
                  {AGENT_PROFILE.tierSub}
                </Text>
              </View>

              <View style={styles.achievementDivider} />

              <View style={styles.achievementItem}>
                <Text style={styles.achievementLabel} numberOfLines={1}>
                  {AGENT_PROFILE.levelLabel}
                </Text>
                <Text style={styles.achievementSub} numberOfLines={1}>
                  {AGENT_PROFILE.levelSub}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          {PROFILE_STATS.map((stat) => (
            <View style={styles.statCard} key={stat.id}>
              <View style={styles.statIconWrap}>
                <Ionicons name={stat.icon} size={16} color={themeColor.appColor} />
              </View>

              <Text style={styles.statValue}>
                {stat.value}
              </Text>

              <Text style={styles.statLabel}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Contact & Work Info
          </Text>

          {WORK_INFO.map((item) => (
            <View style={styles.row} key={item.label}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {MENU_SECTIONS.map((section) => (
          <View key={section.title}>
            <Text style={styles.menuSectionTitle}>
              {section.title}
            </Text>

            <View style={styles.card}>
              {section.items.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Pressable
                    style={styles.menuRow}
                    onPress={() => onMenuPress(item)}
                  >
                    <View style={styles.menuIconWrap}>
                      <Ionicons name={item.icon} size={16} color={themeColor.appColor} />
                    </View>

                    <Text style={styles.menuLabel}>
                      {item.label}
                    </Text>

                    <Ionicons name="chevron-forward" size={16} color={themeColor.placeHolder} />
                  </Pressable>

                  {index < section.items.length - 1 && <View style={styles.menuDivider} />}
                </React.Fragment>
              ))}
            </View>
          </View>
        ))}

        <AppButton
          title="Log Out"
          onPress={onLogout}
          containerStyle={styles.logoutButton}
          titleTextStyle={styles.logoutButtonText}
        />

        <Text style={styles.versionText}>
          FinSquad Agent App · v1.0.0
        </Text>

      </ScrollView>
    </StoryScreen>
  );
};

export default ProfileScreen;

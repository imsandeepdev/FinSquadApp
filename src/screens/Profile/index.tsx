import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { useRole, ROLE_LABELS } from "../../utils/provider/roleProvider";
import { useLanguage } from "../../utils/provider/languageProvider";
import { AVAILABLE_LANGUAGES } from "../../utils/i18n";
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
import LanguageSelectModal from "./LanguageSelectModal";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { role } = useRole();
  const { language, t } = useLanguage();

  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const roleLabel = role ? ROLE_LABELS[role] : AGENT_PROFILE.role;
  const gradientColors = [themeColor.appColor, themeColor.appColor, themeColor.secAppColor];
  const currentLanguageLabel = AVAILABLE_LANGUAGES.find(l => l.code === language)?.nativeLabel;

  const onMenuPress = (item: ProfileMenuItem) => {
    if (item.id === "language") {
      setLanguageModalVisible(true);
      return;
    }

    if (item.id === "edit-profile") {
      navigation.navigate(NAVIGATE_NAME.EDIT_PROFILE_SCREEN);
      return;
    }

    if (item.id === "documents-kyc") {
      navigation.navigate(NAVIGATE_NAME.DOCUMENTS_KYC_SCREEN);
      return;
    }

    if (item.id === "change-password") {
      navigation.navigate(NAVIGATE_NAME.CHANGE_PASSWORD_SCREEN);
      return;
    }

    if (item.id === "my-performance") {
      navigation.navigate(NAVIGATE_NAME.MY_PERFORMANCE_SCREEN);
      return;
    }

    if (item.id === "my-centres") {
      navigation.navigate(NAVIGATE_NAME.MY_CENTRES_SCREEN);
      return;
    }

    Alert.alert(t(item.labelKey), t("common.comingSoon"));
  };

  const onLogout = () => {
    Alert.alert(
      t("profile.logoutConfirmTitle"),
      t("profile.logoutConfirmMessage"),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("profile.logoutConfirm"),
          style: "destructive",
          onPress: () => reset(NAVIGATE_NAME.LOGIN),
        },
      ]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title={t("profile.header")}
        leftIcon={null}
      />

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
                {t(stat.labelKey)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {t("profile.contactWork")}
          </Text>

          {WORK_INFO.map((item) => (
            <View style={styles.row} key={item.labelKey}>
              <Text style={styles.rowLabel}>{t(item.labelKey)}</Text>
              <Text style={styles.rowValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {MENU_SECTIONS.map((section) => (
          <View key={section.titleKey}>
            <Text style={styles.menuSectionTitle}>
              {t(section.titleKey)}
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
                      {t(item.labelKey)}
                    </Text>

                    {item.id === "language" && !!currentLanguageLabel && (
                      <Text style={styles.menuValueText}>{currentLanguageLabel}</Text>
                    )}

                    <Ionicons name="chevron-forward" size={16} color={themeColor.placeHolder} />
                  </Pressable>

                  {index < section.items.length - 1 && <View style={styles.menuDivider} />}
                </React.Fragment>
              ))}
            </View>
          </View>
        ))}

        <AppButton
          title={t("profile.logout")}
          onPress={onLogout}
          containerStyle={styles.logoutButton}
          titleTextStyle={styles.logoutButtonText}
        />

        <Text style={styles.versionText}>
          FinSquad Agent App · v1.0.0
        </Text>

      </ScrollView>

      <LanguageSelectModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
      />
    </StoryScreen>
  );
};

export default ProfileScreen;

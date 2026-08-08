import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, ActivityIndicator, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppTextInput, AppButton, AppHeader, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import {
  AI_KPIS,
  PRIORITY_ACTIONS,
  SUGGESTED_VISITS,
  SUGGESTED_PROMPTS,
  PriorityAction,
} from "./const";
import { getAiAssistantResponse } from "./mockAiAssistant";
import { centres } from "../CentreManagement/const";

const AIInsightsScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [query, setQuery] = useState("");
  const [asking, setAsking] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  // One alert is derived live from real Centre Management data (lowest
  // repayment health score), rather than being purely hardcoded — the rest
  // of the list is a fixed demo set.
  const priorityActions: PriorityAction[] = useMemo(() => {
    const weakest = [...centres].sort(
      (a, b) => a.repaymentHealthScore - b.repaymentHealthScore
    )[0];

    const dynamicAction: PriorityAction = {
      id: "dynamic-centre",
      icon: "people-outline",
      title: `GRT score dropping at ${weakest.name}`,
      description: `Repayment health fell to ${weakest.repaymentHealthScore}/100 — consider a group re-training session before the next disbursement.`,
      priority: weakest.repaymentHealthScore < 65 ? "High" : "Medium",
    };

    return [dynamicAction, ...PRIORITY_ACTIONS];
  }, []);

  const handleAsk = (text?: string) => {
    const finalQuery = (text ?? query).trim();
    if (!finalQuery) return;

    setQuery(finalQuery);
    setAsking(true);
    setResponse(null);

    getAiAssistantResponse(finalQuery).then(res => {
      setResponse(res);
      setAsking(false);
    });
  };

  const onActionPress = (item: PriorityAction) => {
    Alert.alert(item.title, "Detailed drill-down will be available soon.");
  };

  const priorityColor = (priority: PriorityAction["priority"]) =>
    priority === "High" ? themeColor.errorColor : themeColor.infoColor;

  return (
    <StoryScreen>
      <AppHeader
        title="AI Insights"
        leftIcon={null}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.headerRow}>
          <Text style={styles.screenSubtitle}>
            Smart recommendations, powered by your portfolio data
          </Text>
        </View>

        <View style={styles.kpiGrid}>
          {AI_KPIS.map(kpi => (
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
            <Ionicons name="alert-circle-outline" size={16} color={themeColor.appTextColor} />
            <Text style={styles.cardTitle}>
              Priority Actions
            </Text>
          </View>

          {priorityActions.map((item, index) => (
            <React.Fragment key={item.id}>
              <Pressable
                style={styles.actionRow}
                onPress={() => onActionPress(item)}
              >
                <View
                  style={[
                    styles.actionIconWrap,
                    { backgroundColor: priorityColor(item.priority) + "20" },
                  ]}
                >
                  <Ionicons name={item.icon} size={17} color={priorityColor(item.priority)} />
                </View>

                <View style={styles.actionTextWrap}>
                  <View style={styles.actionTitleRow}>
                    <Text style={styles.actionTitle} numberOfLines={2}>
                      {item.title}
                    </Text>

                    <View
                      style={[
                        styles.priorityBadge,
                        { backgroundColor: priorityColor(item.priority) + "20" },
                      ]}
                    >
                      <Text style={[styles.priorityBadgeText, { color: priorityColor(item.priority) }]}>
                        {item.priority.toUpperCase()}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.actionDescription}>
                    {item.description}
                  </Text>
                </View>
              </Pressable>

              {index < priorityActions.length - 1 && <View style={styles.actionDivider} />}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Ionicons name="navigate-outline" size={16} color={themeColor.appTextColor} />
            <Text style={styles.cardTitle}>
              Today's Suggested Visit Order
            </Text>
          </View>

          {SUGGESTED_VISITS.map((stop, index) => (
            <View style={styles.visitRow} key={stop.id}>
              <View style={styles.visitNumberCircle}>
                <Text style={styles.visitNumberText}>{index + 1}</Text>
              </View>

              <View style={styles.visitTextWrap}>
                <Text style={styles.visitName} numberOfLines={1}>
                  {stop.name}
                </Text>
                <Text style={styles.visitSubtitle} numberOfLines={1}>
                  {stop.subtitle}
                </Text>
              </View>

              <View style={styles.visitDistanceChip}>
                <Text style={styles.visitDistanceText}>
                  {stop.distance}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Ionicons name="sparkles-outline" size={16} color={themeColor.appTextColor} />
            <Text style={styles.cardTitle}>
              Ask AI Assistant
            </Text>
          </View>

          <View style={styles.promptChipRow}>
            {SUGGESTED_PROMPTS.map(prompt => (
              <Pressable
                key={prompt}
                style={styles.promptChip}
                onPress={() => handleAsk(prompt)}
              >
                <Text style={styles.promptChipText}>
                  {prompt}
                </Text>
              </Pressable>
            ))}
          </View>

          <AppTextInput
            placeholder="Ask about a customer, centre or loan ID..."
            value={query}
            onChangeText={setQuery}
            leftIcon="chatbubble-ellipses-outline"
            returnKeyType="send"
            onSubmitEditing={() => handleAsk()}
          />

          <AppButton
            title={asking ? "Thinking…" : "Ask AI"}
            onPress={() => handleAsk()}
            disabled={asking}
            containerStyle={styles.askButton}
          />

          {asking && (
            <View style={styles.assistantStatusRow}>
              <ActivityIndicator size="small" color={themeColor.appColor} />
              <Text style={styles.assistantStatusText}>
                Analysing your portfolio…
              </Text>
            </View>
          )}

          {!!response && !asking && (
            <View style={styles.assistantResponseCard}>
              <View style={styles.assistantAvatar}>
                <Text style={styles.assistantAvatarText}>AI</Text>
              </View>
              <Text style={styles.assistantResponseText}>
                {response}
              </Text>
            </View>
          )}
        </View>

      </ScrollView>
    </StoryScreen>
  );
};

export default AIInsightsScreen;

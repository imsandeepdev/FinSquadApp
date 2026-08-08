import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";

const insights = [
  {
    title: "Savings Opportunity",
    value: "₹6,500",
    subtitle: "Potential monthly savings",
  },
  {
    title: "Portfolio Risk",
    value: "Moderate",
    subtitle: "Well balanced portfolio",
  },
  {
    title: "Tax Saving",
    value: "₹48,000",
    subtitle: "Available this year",
  },
];

const goals = [
  {
    title: "Dream House",
    progress: "72%",
  },
  {
    title: "New Car",
    progress: "54%",
  },
  {
    title: "Vacation",
    progress: "91%",
  },
];

const AIWealthCoachScreen = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Good Evening 👋
            </Text>

            <Text style={styles.username}>
              Sandeep
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AI</Text>
          </View>
        </View>

        {/* Health Score */}

        <View style={styles.scoreCard}>
          <Text style={styles.cardLabel}>
            AI Financial Health Score
          </Text>

          <Text style={styles.scoreText}>
            85
            <Text style={styles.totalScore}>/100</Text>
          </Text>

          <View style={styles.progressBg}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.status}>
            Excellent Financial Health
          </Text>
        </View>

        {/* AI Recommendation */}

        <View style={styles.recommendationCard}>
          <Text style={styles.sectionTitle}>
            AI Recommendation
          </Text>

          <Text style={styles.recommendationText}>
            Increase your SIP by ₹2,000 to achieve
            your retirement goal 3 years earlier.
          </Text>
        </View>

        {/* Insights */}

        <Text style={styles.sectionTitle}>
          Smart Insights
        </Text>

        <View style={styles.insightWrapper}>
          {insights.map(item => (
            <View
              key={item.title}
              style={styles.insightCard}
            >
              <Text style={styles.insightTitle}>
                {item.title}
              </Text>

              <Text style={styles.insightValue}>
                {item.value}
              </Text>

              <Text style={styles.insightSubtitle}>
                {item.subtitle}
              </Text>
            </View>
          ))}
        </View>

        {/* Portfolio */}

        <Text style={styles.sectionTitle}>
          Portfolio Analysis
        </Text>

        <View style={styles.portfolioCard}>
          <PortfolioRow
            styles={styles}
            label="Stocks"
            value="42%"
          />
          <PortfolioRow
            styles={styles}
            label="Mutual Funds"
            value="35%"
          />
          <PortfolioRow
            styles={styles}
            label="Gold"
            value="13%"
          />
          <PortfolioRow
            styles={styles}
            label="Cash"
            value="10%"
          />
        </View>

        {/* Goals */}

        <Text style={styles.sectionTitle}>
          Financial Goals
        </Text>

        {goals.map(item => (
          <View
            key={item.title}
            style={styles.goalCard}
          >
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>
                {item.title}
              </Text>

              <Text style={styles.goalPercent}>
                {item.progress}
              </Text>
            </View>

            <View style={styles.goalProgressBg}>
              {/* <View
                style={[
                  styles.goalProgressFill,
                  {
                    width: item.progress,
                  },
                ]}
              /> */}
            </View>
          </View>
        ))}

        {/* Market Intelligence */}

        <Text style={styles.sectionTitle}>
          Market Intelligence
        </Text>

        <View style={styles.marketCard}>
          <Text style={styles.marketTitle}>
            NIFTY Outlook
          </Text>

          <Text style={styles.marketBullish}>
            Bullish ↗
          </Text>

          <Text style={styles.marketSubtitle}>
            Top sectors identified by AI
          </Text>

          <View style={styles.tagsRow}>
            <Tag styles={styles} text="Banking" />
            <Tag styles={styles} text="Technology" />
            <Tag styles={styles} text="Energy" />
          </View>
        </View>

        {/* AI Assistant */}

        <Text style={styles.sectionTitle}>
          Ask AI Assistant
        </Text>

        <View style={styles.chatBox}>
          <TextInput
            placeholder="Ask about investments, tax saving, retirement..."
            placeholderTextColor={themeColor.placeHolder}
            style={styles.input}
          />

          <TouchableOpacity style={styles.askButton}>
            <Text style={styles.askText}>
              Ask AI
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const PortfolioRow = ({
  label,
  value,
  styles,
}: {
  label: string;
  value: string;
  styles: ReturnType<typeof getStyles>;
}) => (
  <View style={styles.portfolioRow}>
    <Text style={styles.portfolioLabel}>
      {label}
    </Text>

    <Text style={styles.portfolioValue}>
      {value}
    </Text>
  </View>
);

const Tag = ({
  text,
  styles,
}: {
  text: string;
  styles: ReturnType<typeof getStyles>;
}) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>
      {text}
    </Text>
  </View>
);

export default AIWealthCoachScreen;
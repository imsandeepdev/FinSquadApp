import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StoryScreen } from "../../components";

const { width } = Dimensions.get("window");

const Dashboard: React.FC = () => {
  return (
    <StoryScreen>
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Good Morning 👋</Text>
            <Text style={styles.userName}>Sandeep</Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>SD</Text>
          </View>
        </View>

        {/* Portfolio Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Portfolio Value</Text>

          <Text style={styles.balanceAmount}>
            ₹ 12,48,560
          </Text>

          <Text style={styles.profitText}>
            +₹18,250 (+2.54%) Today
          </Text>
        </View>

        {/* Income Expense */}
        <View style={styles.row}>
          <View style={[styles.statCard, styles.incomeCard]}>
            <Text style={styles.cardTitle}>Income</Text>
            <Text style={styles.cardAmount}>₹85,000</Text>
          </View>

          <View style={[styles.statCard, styles.expenseCard]}>
            <Text style={styles.cardTitle}>Expense</Text>
            <Text style={styles.cardAmount}>₹32,500</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionContainer}>
          {["Send", "Receive", "Invest", "Bills"].map(item => (
            <TouchableOpacity key={item} style={styles.actionCard}>
              <Text style={styles.actionIcon}>⚡</Text>
              <Text style={styles.actionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Analytics */}
        <Text style={styles.sectionTitle}>Financial Overview</Text>

        <View style={styles.analyticsCard}>
          <Text style={styles.analyticsTitle}>
            Monthly Spending
          </Text>

          <Text style={styles.analyticsAmount}>
            ₹ 32,500
          </Text>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.analyticsSubText}>
            65% of monthly budget used
          </Text>
        </View>

        {/* Investments */}
        <Text style={styles.sectionTitle}>Investments</Text>

        <View style={styles.investmentCard}>
          <View>
            <Text style={styles.investmentTitle}>
              Mutual Funds
            </Text>

            <Text style={styles.investmentValue}>
              ₹ 4,80,000
            </Text>
          </View>

          <Text style={styles.gainText}>+12.4%</Text>
        </View>

        <View style={styles.investmentCard}>
          <View>
            <Text style={styles.investmentTitle}>
              Stocks
            </Text>

            <Text style={styles.investmentValue}>
              ₹ 2,95,000
            </Text>
          </View>

          <Text style={styles.gainText}>+8.7%</Text>
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>

        {[
          {
            name: "Amazon Purchase",
            amount: "- ₹2,999",
          },
          {
            name: "Salary Credit",
            amount: "+ ₹85,000",
          },
          {
            name: "Electricity Bill",
            amount: "- ₹1,450",
          },
        ].map((item, index) => (
          <View key={index} style={styles.transactionCard}>
            <Text style={styles.transactionName}>
              {item.name}
            </Text>

            <Text
              style={[
                styles.transactionAmount,
                {
                  color: item.amount.includes("+")
                    ? "#22C55E"
                    : "#EF4444",
                },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}

        {/* Premium Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            Upgrade to Premium
          </Text>

          <Text style={styles.bannerText}>
            Get AI investment insights, smart budgeting,
            and advanced analytics.
          </Text>

          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>
              Upgrade Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </StoryScreen>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  welcome: {
    color: "#94A3B8",
    fontSize: 14,
  },

  userName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 4,
  },

  profileCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#FFF",
    fontWeight: "700",
  },

  balanceCard: {
    backgroundColor: "#14B8A6",
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },

  balanceLabel: {
    color: "#E6FFFB",
    fontSize: 14,
  },

  balanceAmount: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "800",
    marginVertical: 8,
  },

  profitText: {
    color: "#CCFBF1",
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    width: width * 0.42,
    padding: 18,
    borderRadius: 18,
  },

  incomeCard: {
    backgroundColor: "#1E293B",
  },

  expenseCard: {
    backgroundColor: "#1E293B",
  },

  cardTitle: {
    color: "#94A3B8",
  },

  cardAmount: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
  },

  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    marginTop: 10,
  },

  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  actionCard: {
    backgroundColor: "#1E293B",
    width: width * 0.2,
    height: 75,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  actionIcon: {
    fontSize: 20,
  },

  actionText: {
    color: "#FFF",
    marginTop: 6,
    fontSize: 12,
  },

  analyticsCard: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  analyticsTitle: {
    color: "#CBD5E1",
  },

  analyticsAmount: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 10,
  },

  progressBackground: {
    height: 8,
    backgroundColor: "#334155",
    borderRadius: 10,
  },

  progressFill: {
    width: "65%",
    height: 8,
    backgroundColor: "#14B8A6",
    borderRadius: 10,
  },

  analyticsSubText: {
    color: "#94A3B8",
    marginTop: 10,
  },

  investmentCard: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  investmentTitle: {
    color: "#CBD5E1",
  },

  investmentValue: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
  },

  gainText: {
    color: "#22C55E",
    fontWeight: "700",
    fontSize: 18,
  },

  transactionCard: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  transactionName: {
    color: "#FFF",
  },

  transactionAmount: {
    fontWeight: "700",
  },

  banner: {
    marginTop: 25,
    backgroundColor: "#0EA5E9",
    borderRadius: 24,
    padding: 22,
  },

  bannerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  bannerText: {
    color: "#E0F2FE",
    marginTop: 8,
    lineHeight: 22,
  },

  bannerButton: {
    backgroundColor: "#FFF",
    marginTop: 18,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  bannerButtonText: {
    color: "#0284C7",
    fontWeight: "700",
  },
});
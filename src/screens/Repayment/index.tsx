import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, AppButton, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { REPAYMENT_DATA } from "./const";

const RepaymentScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const {
    nextEmi,
    summary,
    progressLabel,
    progressPercent,
    schedule,
    paymentMethods,
  } = REPAYMENT_DATA;

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);

  const scheduleStatusColor = (status: "Paid" | "Due" | "Upcoming") => {
    if (status === "Paid") return themeColor.successColor;
    if (status === "Due") return themeColor.errorColor;
    return themeColor.placeHolder;
  };

  const onPayNow = () => {
    Alert.alert(
      "Payment initiated",
      `${nextEmi.amount} will be paid via ${
        paymentMethods.find((m) => m.id === selectedMethod)?.label
      }.`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Repayment"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.nextEmiCard}>
          <View style={styles.nextEmiLabelRow}>
            <Text style={styles.nextEmiLabel}>
              Next EMI due
            </Text>

            <Text style={styles.nextEmiInstallment}>
              Installment {nextEmi.installment}
            </Text>
          </View>

          <Text style={styles.nextEmiAmount}>
            {nextEmi.amount}
          </Text>

          <View style={styles.nextEmiDueRow}>
            <Ionicons name="calendar-outline" size={14} color={themeColor.white} />
            <Text style={styles.nextEmiDueText}>
              Due {nextEmi.dueDate}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Loan summary
          </Text>

          {summary.map((item) => (
            <View style={styles.row} key={item.label}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowValue}>{item.value}</Text>
            </View>
          ))}

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
          </View>

          <Text style={styles.progressCaption}>
            {progressLabel}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            EMI schedule
          </Text>

          {schedule.map((item, index) => (
            <React.Fragment key={item.id}>
              <View style={styles.scheduleRow}>
                <Text style={styles.scheduleIdText}>{item.id}</Text>
                <Text style={styles.scheduleMonthText}>{item.month}</Text>
                <Text style={styles.scheduleAmountText}>{item.amount}</Text>

                <View
                  style={[
                    styles.scheduleStatusBadge,
                    { backgroundColor: scheduleStatusColor(item.status) + "20" },
                  ]}
                >
                  <Text
                    style={[
                      styles.scheduleStatusText,
                      { color: scheduleStatusColor(item.status) },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              {index < schedule.length - 1 && <View style={styles.scheduleDivider} />}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Payment methods
          </Text>

          {paymentMethods.map((method) => {
            const selected = method.id === selectedMethod;
            return (
              <Pressable
                style={styles.methodRow}
                key={method.id}
                onPress={() => setSelectedMethod(method.id)}
              >
                <View style={styles.methodIconWrap}>
                  <Ionicons name={method.icon} size={16} color={themeColor.appColor} />
                </View>

                <Text style={styles.methodLabel}>{method.label}</Text>

                <View style={styles.radioOuter}>
                  {selected && <View style={styles.radioInner} />}
                </View>
              </Pressable>
            );
          })}
        </View>

        <AppButton
          title={`Pay ${nextEmi.amount} now`}
          onPress={onPayNow}
          containerStyle={styles.payButton}
        />

      </ScrollView>
    </StoryScreen>
  );
};

export default RepaymentScreen;

import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, AppButton, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { PRE_DISBURSEMENT_DATA } from "./const";

const PreDisbursementScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [consentChecked, setConsentChecked] = useState(false);

  const { loanId, setupProgress, checklist, account } = PRE_DISBURSEMENT_DATA;

  const statusColor = (status: "Done" | "Pending") =>
    status === "Done" ? themeColor.successColor : themeColor.infoColor;

  const onConfirm = () => {
    if (!consentChecked) {
      Alert.alert(
        "Consent required",
        "Please authorize the disbursement before confirming."
      );
      return;
    }

    Alert.alert(
      "Disbursement confirmed",
      "Funds will be disbursed to the account on file on the expected date.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Pre-Disbursement"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.progressCard}>
          <View style={styles.progressHeaderRow}>
            <View>
              <Text style={styles.progressLabel}>
                Setup progress
              </Text>
              <Text style={styles.progressLoanId}>
                Loan ID: {loanId}
              </Text>
            </View>

            <Text style={styles.progressPercentText}>
              {setupProgress}%
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${setupProgress}%` }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Verification checklist
          </Text>

          {checklist.map((item) => (
            <View style={styles.checkRow} key={item.title}>
              <View
                style={[
                  styles.checkIconWrap,
                  { backgroundColor: statusColor(item.status) + "20" },
                ]}
              >
                <Ionicons
                  name={item.status === "Done" ? "checkmark" : "time-outline"}
                  size={16}
                  color={statusColor(item.status)}
                />
              </View>

              <View style={styles.checkTextWrap}>
                <Text style={styles.checkTitle}>{item.title}</Text>
                <Text style={styles.checkSubtitle}>{item.subtitle}</Text>
              </View>

              <View
                style={[
                  styles.checkStatusBadge,
                  { backgroundColor: statusColor(item.status) + "20" },
                ]}
              >
                <Text style={[styles.checkStatusText, { color: statusColor(item.status) }]}>
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Disbursement account
          </Text>

          {account.map((item) => (
            <View style={styles.row} key={item.label}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Consent
          </Text>

          <Pressable
            style={styles.consentRow}
            onPress={() => setConsentChecked((prev) => !prev)}
          >
            <View style={[styles.checkboxBox, consentChecked && styles.checkboxBoxChecked]}>
              {consentChecked && (
                <Ionicons name="checkmark" size={16} color={themeColor.white} />
              )}
            </View>

            <Text style={styles.consentText}>
              I authorize the disbursement of funds to the account above.
            </Text>
          </Pressable>
        </View>

        <AppButton
          title="Confirm disbursement"
          onPress={onConfirm}
          containerStyle={styles.confirmButton}
        />

      </ScrollView>
    </StoryScreen>
  );
};

export default PreDisbursementScreen;

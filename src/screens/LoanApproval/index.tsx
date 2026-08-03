import React from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppHeader, AppButton, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { LOAN_APPROVAL_DATA } from "./const";

const LoanApprovalScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const { loanId, status, approvedAmount, breakdown, terms, documents } = LOAN_APPROVAL_DATA;

  const Row = (label: string, value: string, highlight?: boolean) => (
    <View style={styles.row} key={label}>
      <Text style={highlight ? styles.rowLabelHighlight : styles.rowLabel}>
        {label}
      </Text>
      <Text style={highlight ? styles.rowValueHighlight : styles.rowValue}>
        {value}
      </Text>
    </View>
  );

  const onAccept = () => {
    Alert.alert(
      "Offer accepted",
      "This loan offer has been accepted. Proceeding to pre-disbursement.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  const onDecline = () => {
    Alert.alert(
      "Decline this offer?",
      "You can revisit this loan offer later from the loan list.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Decline", style: "destructive", onPress: () => navigation.goBack() },
      ]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Loan Approval"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.loanIdRow}>
          <Text style={styles.loanIdText}>
            Loan ID: {loanId}
          </Text>

          <View style={styles.statusBadge}>
            <Ionicons name="checkmark-circle" size={14} color={themeColor.successColor} />
            <Text style={styles.statusBadgeText}>
              {status}
            </Text>
          </View>
        </View>

        <View style={styles.amountHero}>
          <Text style={styles.amountHeroLabel}>
            Approved loan amount
          </Text>
          <Text style={styles.amountHeroValue}>
            {approvedAmount}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Amount breakdown
          </Text>

          {breakdown.map((item, index) => (
            <React.Fragment key={item.label}>
              {Row(item.label, item.value, item.highlight)}
              {index < breakdown.length - 1 && <View style={styles.rowDivider} />}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Loan terms
          </Text>

          {terms.map((item) => Row(item.label, item.value))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Documents
          </Text>

          {documents.map((doc) => (
            <View style={styles.docRow} key={doc.title}>
              <View style={styles.docIconWrap}>
                <Ionicons name={doc.icon} size={18} color={themeColor.appColor} />
              </View>

              <View style={styles.docTextWrap}>
                <Text style={styles.docTitle}>{doc.title}</Text>
                <Text style={styles.docSubtitle}>{doc.subtitle}</Text>
              </View>

              <View style={styles.docAction}>
                <Ionicons name={doc.icon} size={12} color={themeColor.appColor} />
                <Text style={styles.docActionText}>{doc.actionLabel}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.buttonsWrap}>
          <AppButton
            title="Accept & proceed"
            onPress={onAccept}
            containerStyle={styles.acceptButton}
          />

          <AppButton
            title="Decline offer"
            onPress={onDecline}
            containerStyle={styles.declineButton}
            titleTextStyle={styles.declineButtonText}
          />
        </View>

      </ScrollView>
    </StoryScreen>
  );
};

export default LoanApprovalScreen;

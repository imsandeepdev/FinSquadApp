import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppHeader, StepProgressBar, StoryScreen } from "../../components";
import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";

import ApplicantSelect from "./ApplicantSelect";
import IncomeAssessment from "./IncomeAssessment";
import LoanProposalForm from "./LoanProposalForm";
import AIRiskReview from "./AIRiskReview";
import DisbursementStep from "./DisbursementStep";

const TOTAL_STEPS = 5;

export interface LoanOriginationData {
  customerId: string;
  customerName: string;
  centreCode: string;
  centreName: string;
  village: string;

  monthlyIncome: string;
  existingMonthlyEMI: string;
  monthlyExpense: string;

  requestedAmount: string;
  tenureMonths: string;
  purpose: string;

  aiRiskScore: string;
  aiRiskBand: string;
  aiRecommendation: string;
}

const initialData: LoanOriginationData = {
  customerId: "",
  customerName: "",
  centreCode: "",
  centreName: "",
  village: "",

  monthlyIncome: "",
  existingMonthlyEMI: "",
  monthlyExpense: "",

  requestedAmount: "",
  tenureMonths: "12",
  purpose: "",

  aiRiskScore: "",
  aiRiskBand: "",
  aiRecommendation: "",
};

const LoanOriginationScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<LoanOriginationData>(initialData);

  const updateData = (key: string, value: string) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const validateStep = (): boolean => {
    if (step === 1 && !data.customerId) {
      Alert.alert("Select Applicant", "Please select a customer to continue.");
      return false;
    }
    if (step === 2) {
      const income = Number(data.monthlyIncome);
      if (!income || income <= 0) {
        Alert.alert("Income Required", "Enter a valid monthly household income.");
        return false;
      }
    }
    if (step === 3) {
      const amount = Number(data.requestedAmount);
      if (!amount || amount <= 0) {
        Alert.alert("Loan Amount Required", "Enter a valid requested loan amount.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderTitle = () => {
    switch (step) {
      case 1:
        return "Select Applicant";
      case 2:
        return "Income Assessment";
      case 3:
        return "Loan Proposal";
      case 4:
        return "AI Risk Review";
      case 5:
        return "Disbursement";
      default:
        return "";
    }
  };

  const nextButtonTitle = () => {
    switch (step) {
      case 1:
        return "Next: Income Assessment";
      case 2:
        return "Next: Loan Proposal";
      case 3:
        return "Next: AI Risk Review";
      case 4:
        return "Next: Disbursement";
      default:
        return "Next";
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ApplicantSelect data={data} updateData={updateData} />;
      case 2:
        return <IncomeAssessment data={data} updateData={updateData} />;
      case 3:
        return <LoanProposalForm data={data} updateData={updateData} />;
      case 4:
        return <AIRiskReview data={data} updateData={updateData} />;
      case 5:
        return (
          <DisbursementStep
            data={data}
            onDone={() => navigation.popToTop()}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Loan Origination"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.header}>
        <View style={styles.stepRow}>
          <Text style={styles.stepText}>
            Step {step}/{TOTAL_STEPS}
          </Text>
        </View>

        <Text style={styles.title}>{renderTitle()}</Text>

        <StepProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderStep()}
      </ScrollView>

      {step < TOTAL_STEPS && (
        <View style={styles.bottomContainer}>
          <View style={styles.bottomViewContainer}>
            {step > 1 && (
              <TouchableOpacity style={styles.backButton} onPress={previousStep}>
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
              <Text style={styles.nextText}>{nextButtonTitle()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </StoryScreen>
  );
};

export default LoanOriginationScreen;

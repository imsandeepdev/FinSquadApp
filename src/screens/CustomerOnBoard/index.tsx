import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppHeader, StepProgressBar, StoryScreen } from "../../components";
import CustomerMaster from "./CustomerMaster";
import NomineeDetails from "./NomineeDetails";
import BankDetails from "./BankDetails";
import FamilyDetails from "./FamilyDetails";
import LoanPurposeDetails from "./LoanPurposeDetails";
import IncomeAssessment from "./IncomeAssessment";
import GRTDetails from "./GRTDetails";
import CentreFormationStep from "./CentreFormationStep";
import GRTApproval from "./GRTApproval";
import HouseVerification from "./HouseVerification";
import FIApproval from "./FIApproval";
import ReviewSubmit from "./ReviewSubmit";
import { getStyles } from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";
import {useNavigation, useRoute} from '@react-navigation/native';

interface StepDef {
  key: string;
  title: string;
  nextLabel: string;
  Component: React.ComponentType<{ data: any; updateData: (key: string, value: string) => void }>;
}

const CustomerOnboardingScreen = () => {

  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [step, setStep] = useState(1);

  const [customerData, setCustomerData] = useState({
    // Loan Type (selected on the previous "लोन का प्रकार चुनें" screen)
    loanTypeCode: route.params?.loanTypeCode || "",
    loanTypeName: route.params?.loanTypeName || "",
    // Drives the branching below: GRT path vs FI path.
    isMicrofinance: route.params?.isMicrofinance ? "true" : "false",

    // Customer Master
    fullName: "",
    dob: "",
    gender: "",
    address: "",
    mobile: "",
    email: "",
    aadhaar: "",
    pan: "",
    occupation: "",
    income: "",
    maritalStatus: "",
    centreCode: "",

    // Nominee
    nomineeName: "",
    nomineeRelation: "",
    nomineeDob: "",
    nomineeMobile: "",
    nomineeAadhaar: "",
    nomineeDocType: "",
    nomineeDocFrontUri: "",
    nomineeDocBackUri: "",

    // Co-Applicant
    coName: "",
    coRelation: "",
    coDob: "",
    coMobile: "",
    coAadhaar: "",
    coDocType: "",
    coDocFrontUri: "",
    coDocBackUri: "",

    // Bank Details
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    confirmAccount: "",
    ifsc: "",
    branch: "",
    accountType: "",
    bankDocType: "",
    bankDocumentUri: "",

    // Family Details
    familyName: "",
    familyRelation: "",
    familyDob: "",
    familyMobile: "",
    familyAadhaar: "",
    familyDocType: "",
    familyDocFrontUri: "",
    familyDocBackUri: "",

    // Loan Purpose & Repayment Capacity
    loanPurpose: "",
    loanAmountRequired: "",
    repaymentFrequency: "",
    existingLoans: "",
    existingEmi: "",
    householdExpenses: "",
    dependents: "",
    otherIncomeSource: "",

    // Income Assessment
    iaOccupationType: "",
    iaEmployerName: "",
    iaMonthlyIncome: "",
    iaMonthlyExpenses: "",
    iaOtherIncomeSources: "",
    iaEarningMembers: "",
    iaTotalHouseholdIncome: "",
    iaNetDisposableIncome: "",
    iaLoanEligibility: "",
    iaIncomeProofUri: "",
    iaBankStatementUri: "",

    // GRT (Group Recognition Test) -- microfinance path only
    grtGroupName: "",
    grtMemberCount: "",
    grtConductedBy: "",
    grtDate: "",
    grtLoanPurposeUnderstanding: "",
    grtRepaymentUnderstanding: "",
    grtGroupLiabilityUnderstanding: "",
    grtMembersPresent: "",
    grtScore: "",
    grtResult: "",
    grtRemarks: "",
    grtPhotoUri: "",

    // Centre Formation -- microfinance path only
    cfCentreName: "",
    cfCentreCode: "",
    cfLeaderName: "",
    cfGroupCount: "",
    cfMemberCount: "",
    cfMeetingDay: "",
    cfMeetingTime: "",
    cfMeetingPlace: "",
    cfFormationDate: "",
    cfFieldOfficerName: "",
    cfPhotoUri: "",

    // GRT Approval -- microfinance path only
    grtApprovalStatus: "",

    // FI / House Verification -- non-microfinance path only
    hvApplicantName: "",
    hvVerificationDate: "",
    hvVerifiedBy: "",
    hvHouseType: "",
    hvOwnershipProofType: "",
    hvDurationOfStay: "",
    hvAddressMatches: "",
    hvNeighborVerificationName: "",
    hvGpsCaptured: "",
    hvHousePhotoUri: "",
    hvLandmarkPhotoUri: "",

    // FI Approval -- non-microfinance path only
    fiApprovalStatus: "",

    // Review & Submit
    declarationAccepted: "",
  });

  const isMicrofinance = customerData.isMicrofinance === "true";

  const updateData = (key: string, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  // Steps 1-6 are common to every loan type. After Income Assessment, the
  // flow branches per the loan application process doc:
  //   Microfinance loan     -> GRT & Centre Formation -> GRT approval
  //   Not a microfinance loan -> FI verification -> FI approval
  // Both paths converge back into Review & Submit.
  const STEPS: StepDef[] = [
    { key: "customerMaster", title: "Customer Onboarding", nextLabel: "Next: Nominee", Component: CustomerMaster },
    { key: "nominee", title: "Nominee & Co-Applicant", nextLabel: "Next: Bank Details", Component: NomineeDetails },
    { key: "bank", title: "Bank Details", nextLabel: "Next: Family Details", Component: BankDetails },
    { key: "family", title: "Family Details", nextLabel: "Next: Loan Requirement", Component: FamilyDetails },
    { key: "loanPurpose", title: "Loan Requirement", nextLabel: "Next: Income Assessment", Component: LoanPurposeDetails },
    {
      key: "income",
      title: "Income Assessment",
      nextLabel: isMicrofinance ? "Next: GRT" : "Next: FI Verification",
      Component: IncomeAssessment,
    },
    ...(isMicrofinance
      ? [
          { key: "grt", title: "GRT (Group Recognition Test)", nextLabel: "Next: Centre Formation", Component: GRTDetails },
          { key: "centreFormation", title: "Centre Formation", nextLabel: "Next: GRT Approval", Component: CentreFormationStep },
          { key: "grtApproval", title: "GRT Approval", nextLabel: "Next: Review", Component: GRTApproval },
        ]
      : [
          { key: "fiVerification", title: "FI Verification", nextLabel: "Next: FI Approval", Component: HouseVerification },
          { key: "fiApproval", title: "FI Approval", nextLabel: "Next: Review", Component: FIApproval },
        ]),
    { key: "review", title: "Review & Submit", nextLabel: "Submit", Component: ReviewSubmit },
  ];

  const TOTAL_STEPS = STEPS.length;
  const currentStepDef = STEPS[step - 1];

  const nextStep = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }

    if (customerData.declarationAccepted !== "true") {
      Alert.alert(
        "Declaration required",
        "Please accept the declaration at the bottom of the review before submitting."
      );
      return;
    }

    console.log(customerData);
    Alert.alert(
      "Application Submitted",
      "Customer onboarding details have been submitted successfully.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  const isSubmitStep = step === TOTAL_STEPS;
  const isSubmitBlocked = isSubmitStep && customerData.declarationAccepted !== "true";

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    const StepComponent = currentStepDef?.Component;
    if (!StepComponent) return null;

    return (
      <StepComponent
        data={customerData}
        updateData={updateData}
      />
    );
  };

  return (
   <StoryScreen>
    <AppHeader
        title={"Customer On-Boarding"}
        onPress={()=> {navigation.goBack()}}
    />
      <View style={styles.header}>

        <View style={styles.stepRow}>
          <Text style={styles.stepText}>
            Step {step}/{TOTAL_STEPS}
          </Text>
        </View>

        <Text style={styles.title}>
          {currentStepDef?.title || ""}
        </Text>

        {!!customerData.loanTypeName && (
          <View style={styles.loanTypeChip}>
            <Ionicons name="pricetag-outline" size={13} color={themeColor.successColor} />
            <Text style={styles.loanTypeChipText}>
              {customerData.loanTypeName}
            </Text>
          </View>
        )}

        <StepProgressBar
          currentStep={step}
          totalSteps={TOTAL_STEPS}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderStep()}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomViewContainer}>
        {step > 1 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={previousStep}
          >
            <Text style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.nextButton, isSubmitBlocked && styles.nextButtonDisabled]}
          onPress={nextStep}
          activeOpacity={isSubmitBlocked ? 1 : 0.7}
        >
          <Text style={styles.nextText}>
            {currentStepDef?.nextLabel || "Next"}
          </Text>
        </TouchableOpacity>
        </View>
      </View>
   </StoryScreen>
  );
};

export default CustomerOnboardingScreen;

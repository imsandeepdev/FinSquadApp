import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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
import HouseVerification from "./HouseVerification";
import ReviewSubmit from "./ReviewSubmit";
import { getStyles } from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";
import {useNavigation, useRoute} from '@react-navigation/native';


const TOTAL_STEPS = 10;

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

    // GRT (Group Recognition Test)
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

    // Centre Formation
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

    // House Verification
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

    // Review & Submit
    declarationAccepted: "",
  });

  const updateData = (key: string, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

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

  const renderTitle = () => {
    switch (step) {
      case 1:
        return "Customer Onboarding";

      case 2:
        return "Nominee & Co-Applicant";

      case 3:
        return "Bank Details";

      case 4:
        return "Family Details";

      case 5:
        return "Loan Requirement";

      case 6:
        return "Income Assessment";

      case 7:
        return "GRT (Group Recognition Test)";

      case 8:
        return "Centre Formation";

      case 9:
        return "House Verification";

      case 10:
        return "Review & Submit";

      default:
        return "";
    }
  };

  const nextButtonTitle = () => {
    switch (step) {
      case 1:
        return "Next: Nominee";

      case 2:
        return "Next: Bank Details";

      case 3:
        return "Next: Family Details";

      case 4:
        return "Next: Loan Requirement";

      case 5:
        return "Next: Income Assessment";

      case 6:
        return "Next: GRT";

      case 7:
        return "Next: Centre Formation";

      case 8:
        return "Next: House Verification";

      case 9:
        return "Next: Review";

      case 10:
        return "Submit";

      default:
        return "Next";
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CustomerMaster
            data={customerData}
            updateData={updateData}
          />
        );

      case 2:
        return (
          <NomineeDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 3:
        return (
          <BankDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 4:
        return (
          <FamilyDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 5:
        return (
          <LoanPurposeDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 6:
        return (
          <IncomeAssessment
            data={customerData}
            updateData={updateData}
          />
        );

      case 7:
        return (
          <GRTDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 8:
        return (
          <CentreFormationStep
            data={customerData}
            updateData={updateData}
          />
        );

      case 9:
        return (
          <HouseVerification
            data={customerData}
            updateData={updateData}
          />
        );

      case 10:
        return (
          <ReviewSubmit
            data={customerData}
            updateData={updateData}
          />
        );

      default:
        return null;
    }
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
          {renderTitle()}
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
            {nextButtonTitle()}
          </Text>
        </TouchableOpacity>
        </View>
      </View>
   </StoryScreen>
  );
};

export default CustomerOnboardingScreen;


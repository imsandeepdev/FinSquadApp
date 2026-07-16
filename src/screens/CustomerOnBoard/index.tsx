import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AppHeader, StepProgressBar, StoryScreen } from "../../components";
import CustomerMaster from "./CustomerMaster";
import NomineeDetails from "./NomineeDetails";
import BankDetails from "./BankDetails";
import KYCDetails from "./KYCDetails";
import InvestmentDetails from "./InvestmentDetails";
import ReviewSubmit from "./ReviewSubmit";
import { getStyles } from "./styles";
import { useTheme } from "../../utils/provider/themeProvider";
import {useNavigation} from '@react-navigation/native';


const TOTAL_STEPS = 6;

const CustomerOnboardingScreen = () => {

  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [step, setStep] = useState(1);

  const [customerData, setCustomerData] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    pan: "",

    nomineeName: "",
    nomineeRelation: "",
    nomineeDob: "",

    bankName: "",
    accountNumber: "",
    ifsc: "",

    kycNumber: "",

    investmentAmount: "",
    investmentType: "",
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
    } else {
      console.log(customerData);
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
        return "Customer Onboarding";

      case 2:
        return "Nominee & Co-Applicant";

      case 3:
        return "Bank Details";

      case 4:
        return "KYC Details";

      case 5:
        return "Investment";

      case 6:
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
        return "Next: KYC";

      case 4:
        return "Next: Investment";

      case 5:
        return "Next: Review";

      case 6:
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
          <KYCDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 5:
        return (
          <InvestmentDetails
            data={customerData}
            updateData={updateData}
          />
        );

      case 6:
        return (
          <ReviewSubmit
            data={customerData}
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
          style={styles.nextButton}
          onPress={nextStep}
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


import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { centres } from "../../CentreManagement/const";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const docStatus = (front?: string, back?: string) => {
  if (front && back) return "Uploaded (Front & Back)";
  if (front || back) return "Partially uploaded";
  return "Not uploaded";
};

const singleDocStatus = (uri?: string) => (uri ? "Uploaded" : "Not uploaded");

const ReviewSubmit: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const declarationAccepted = data.declarationAccepted === "true";

  const Card = ({
    title,
    children,
  }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      {children}
    </View>
  );

  const Item = (
    label: string,
    value: string,
  ) => (
    <View style={styles.row} key={label}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value || "-"}
      </Text>
    </View>
  );

  const centre = centres.find((c) => c.code === data.centreCode);
  const hasCoApplicant = !!(data.coName || data.coRelation || data.coDob || data.coMobile);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>
        Review & Submit
      </Text>

      {/* CUSTOMER */}

      <Card title="Customer">

        {Item("Name", data.fullName)}
        {Item("DOB", data.dob)}
        {Item("Gender", data.gender)}
        {Item("Mobile", data.mobile)}
        {Item("Email", data.email)}
        {Item("Aadhaar", data.aadhaar)}
        {Item("PAN", data.pan)}
        {Item("Occupation", data.occupation)}
        {Item("Annual Income", data.income)}
        {Item("Marital Status", data.maritalStatus)}
        {Item("Address", data.address)}
        {Item("Linked Centre", centre?.name || data.centreCode)}

      </Card>

      {/* NOMINEE */}

      <Card title="Nominee">

        {Item("Name", data.nomineeName)}
        {Item("Relation", data.nomineeRelation)}
        {Item("DOB", data.nomineeDob)}
        {Item("Mobile", data.nomineeMobile)}
        {Item("Aadhaar", data.nomineeAadhaar)}
        {Item("ID Proof Type", data.nomineeDocType)}
        {Item("ID Proof", docStatus(data.nomineeDocFrontUri, data.nomineeDocBackUri))}

      </Card>

      {/* CO-APPLICANT */}

      <Card title="Co-Applicant">

        {hasCoApplicant ? (
          <>
            {Item("Name", data.coName)}
            {Item("Relation", data.coRelation)}
            {Item("DOB", data.coDob)}
            {Item("Mobile", data.coMobile)}
            {Item("Aadhaar", data.coAadhaar)}
            {Item("ID Proof Type", data.coDocType)}
            {Item("ID Proof", docStatus(data.coDocFrontUri, data.coDocBackUri))}
          </>
        ) : (
          <Text style={styles.emptyCardText}>
            No co-applicant added (optional).
          </Text>
        )}

      </Card>

      {/* BANK */}

      <Card title="Bank">

        {Item("Bank", data.bankName)}
        {Item("Account Holder", data.accountHolder)}
        {Item("Account Number", data.accountNumber)}
        {Item("IFSC", data.ifsc)}
        {Item("Branch", data.branch)}
        {Item("Account Type", data.accountType)}
        {Item("Document Type", data.bankDocType)}
        {Item("Document", singleDocStatus(data.bankDocumentUri))}

      </Card>

      {/* KYC */}

      <Card title="KYC">

        {Item("Passport", data.passport)}
        {Item("Driving License", data.dl)}
        {Item("Voter ID", data.voterId)}
        {Item("CKYC", data.ckyc)}
        {Item("KYC Document Type", data.kycDocType)}
        {Item("KYC Document", docStatus(data.kycDocFrontUri, data.kycDocBackUri))}

      </Card>

      {/* LOAN REQUIREMENT */}

      <Card title="Loan Requirement">

        {Item("Purpose", data.loanPurpose)}
        {Item("Indicative Amount", data.loanAmountRequired)}
        {Item("Repayment Frequency", data.repaymentFrequency)}
        {Item("Existing Loans", data.existingLoans)}
        {Item("Existing Monthly EMI", data.existingEmi)}
        {Item("Household Expenses", data.householdExpenses)}
        {Item("Dependents", data.dependents)}
        {Item("Other Income Source", data.otherIncomeSource)}

      </Card>

      {/* Declaration */}

      <View style={styles.declaration}>

        <Text style={styles.declarationTitle}>
          Declaration
        </Text>

        <Text style={styles.declarationText}>
          I hereby confirm that the information provided
          above is true and correct to the best of my
          knowledge, and that the documents uploaded
          are genuine and belong to the applicant.
        </Text>

        <Pressable
          style={styles.declarationCheckRow}
          onPress={() =>
            updateData("declarationAccepted", declarationAccepted ? "" : "true")
          }
        >
          <View style={[styles.checkboxBox, declarationAccepted && styles.checkboxBoxChecked]}>
            {declarationAccepted && (
              <Ionicons name="checkmark" size={16} color={themeColor.white} />
            )}
          </View>

          <Text style={styles.declarationAcceptLabel}>
            I agree to the above declaration
          </Text>
        </Pressable>

        {!declarationAccepted && (
          <Text style={styles.declarationRequiredNote}>
            Required before this application can be submitted.
          </Text>
        )}

      </View>

    </ScrollView>
  );
};

export default ReviewSubmit;

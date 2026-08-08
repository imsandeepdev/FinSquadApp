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
  const isMicrofinance = data.isMicrofinance === "true";
  const approvalStatus = isMicrofinance
    ? data.grtApprovalStatus || "Pending"
    : data.fiApprovalStatus || "Pending";

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

        {Item("Loan Type", data.loanTypeName)}
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

      {/* FAMILY DETAILS */}

      <Card title="Family Details">

        {Item("Name", data.familyName)}
        {Item("Relation", data.familyRelation)}
        {Item("DOB", data.familyDob)}
        {Item("Mobile", data.familyMobile)}
        {Item("Aadhaar", data.familyAadhaar)}
        {Item("ID Proof Type", data.familyDocType)}
        {Item("ID Proof", docStatus(data.familyDocFrontUri, data.familyDocBackUri))}

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

      {/* INCOME ASSESSMENT */}

      <Card title="Income Assessment">

        {Item("Occupation Type", data.iaOccupationType)}
        {Item("Business / Employer Name", data.iaEmployerName)}
        {Item("Monthly Income", data.iaMonthlyIncome)}
        {Item("Monthly Household Expenses", data.iaMonthlyExpenses)}
        {Item("Other Income Sources", data.iaOtherIncomeSources)}
        {Item("No. of Earning Members", data.iaEarningMembers)}
        {Item("Total Household Income", data.iaTotalHouseholdIncome)}
        {Item("Existing Loan EMI Outgo", data.existingEmi)}
        {Item("Net Disposable Income", data.iaNetDisposableIncome)}
        {Item("Loan Eligibility (Auto-calc)", data.iaLoanEligibility)}
        {Item("Income Proof", singleDocStatus(data.iaIncomeProofUri))}
        {Item("Bank Statement", singleDocStatus(data.iaBankStatementUri))}

      </Card>

      {isMicrofinance ? (
        <>
          {/* GRT */}

          <Card title="GRT (Group Recognition Test)">

            {Item("Group Name", data.grtGroupName)}
            {Item("No. of Group Members", data.grtMemberCount)}
            {Item("GRT Conducted By", data.grtConductedBy)}
            {Item("GRT Date", data.grtDate)}
            {Item("Loan Purpose Understanding", data.grtLoanPurposeUnderstanding)}
            {Item("Repayment Terms Understanding", data.grtRepaymentUnderstanding)}
            {Item("Group Liability Understanding", data.grtGroupLiabilityUnderstanding)}
            {Item("Members Present", data.grtMembersPresent)}
            {Item("GRT Score", data.grtScore)}
            {Item("GRT Result", data.grtResult)}
            {Item("Remarks", data.grtRemarks)}
            {Item("GRT Photo", singleDocStatus(data.grtPhotoUri))}

          </Card>

          {/* CENTRE FORMATION */}

          <Card title="Centre Formation">

            {Item("Centre Name", data.cfCentreName)}
            {Item("Centre Code", data.cfCentreCode)}
            {Item("Centre Leader Name", data.cfLeaderName)}
            {Item("No. of Groups", data.cfGroupCount)}
            {Item("No. of Members", data.cfMemberCount)}
            {Item("Meeting Day", data.cfMeetingDay)}
            {Item("Meeting Time", data.cfMeetingTime)}
            {Item("Meeting Place", data.cfMeetingPlace)}
            {Item("Formation Date", data.cfFormationDate)}
            {Item("Field Officer", data.cfFieldOfficerName)}
            {Item("Centre Photo", singleDocStatus(data.cfPhotoUri))}

          </Card>
        </>
      ) : (
        /* FI / HOUSE VERIFICATION */

        <Card title="FI Verification">

          {Item("Applicant Name", data.hvApplicantName)}
          {Item("Verification Date", data.hvVerificationDate)}
          {Item("Verified By", data.hvVerifiedBy)}
          {Item("House Type", data.hvHouseType)}
          {Item("Ownership Proof Type", data.hvOwnershipProofType)}
          {Item("Duration of Stay", data.hvDurationOfStay)}
          {Item("Address Matches Application", data.hvAddressMatches)}
          {Item("Neighbor Verification Name", data.hvNeighborVerificationName)}
          {Item("GPS Location Captured", data.hvGpsCaptured)}
          {Item("House Photo", singleDocStatus(data.hvHousePhotoUri))}
          {Item("Landmark Photo", singleDocStatus(data.hvLandmarkPhotoUri))}

        </Card>
      )}

      {/* APPROVAL */}

      <Card title={isMicrofinance ? "GRT Approval" : "FI Approval"}>

        {Item("Approval Status", approvalStatus)}

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

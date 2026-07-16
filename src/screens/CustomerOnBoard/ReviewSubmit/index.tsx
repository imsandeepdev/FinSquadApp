import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
}

const ReviewSubmit: React.FC<Props> = ({
  data,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

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
    <View style={styles.row}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value || "-"}
      </Text>
    </View>
  );

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

        {Item(
          "Name",
          data.fullName
        )}

        {Item(
          "DOB",
          data.dob
        )}

        {Item(
          "Mobile",
          data.mobile
        )}

        {Item(
          "PAN",
          data.pan
        )}

        {Item(
          "Aadhaar",
          data.aadhaar
        )}

      </Card>

      {/* NOMINEE */}

      <Card title="Nominee">

        {Item(
          "Name",
          data.nomineeName
        )}

        {Item(
          "Relation",
          data.nomineeRelation
        )}

        {Item(
          "DOB",
          data.nomineeDob
        )}

      </Card>

      {/* BANK */}

      <Card title="Bank">

        {Item(
          "Bank",
          data.bankName
        )}

        {Item(
          "Account Holder",
          data.accountHolder
        )}

        {Item(
          "Account Number",
          data.accountNumber
        )}

        {Item(
          "IFSC",
          data.ifsc
        )}

      </Card>

      {/* KYC */}

      <Card title="KYC">

        {Item(
          "PAN",
          data.kycPan
        )}

        {Item(
          "Aadhaar",
          data.kycAadhaar
        )}

        {Item(
          "Passport",
          data.passport
        )}

        {Item(
          "CKYC",
          data.ckyc
        )}

      </Card>

      {/* INVESTMENT */}

      <Card title="Investment">

        {Item(
          "Amount",
          data.investmentAmount
        )}

        {Item(
          "Type",
          data.investmentType
        )}

        {Item(
          "Risk",
          data.riskProfile
        )}

        {Item(
          "Horizon",
          data.horizon
        )}

      </Card>

      {/* Declaration */}

      <View style={styles.declaration}>

        <Text style={styles.declarationTitle}>
          Declaration
        </Text>

        <Text style={styles.declarationText}>
          I hereby confirm that the
          information provided above
          is true and correct to the
          best of my knowledge and
          all supporting documents
          have been verified.
        </Text>

      </View>

    </ScrollView>
  );
};

export default ReviewSubmit;
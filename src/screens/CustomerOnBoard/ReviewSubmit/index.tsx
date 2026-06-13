import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

interface Props {
  data: any;
}

const ReviewSubmit: React.FC<Props> = ({
  data,
}) => {
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
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 40,
      }}
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

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2144B5",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 16,

    marginBottom: 16,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,

    fontWeight: "700",

    color: "#2144B5",

    marginBottom: 15,
  },

  row: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 10,
  },

  label: {
    fontSize: 15,

    color: "#75849A",

    flex: 1,
  },

  value: {
    flex: 1,

    textAlign: "right",

    color: "#000",

    fontWeight: "600",
  },

  declaration: {
    backgroundColor: "#EEF4FF",

    borderRadius: 18,

    padding: 16,

    marginTop: 10,
  },

  declarationTitle: {
    fontSize: 18,

    fontWeight: "700",

    color: "#2144B5",
  },

  declarationText: {
    marginTop: 10,

    lineHeight: 22,

    color: "#75849A",

    fontSize: 14,
  },
});
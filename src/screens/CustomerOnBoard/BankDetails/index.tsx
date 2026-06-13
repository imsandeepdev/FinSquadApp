import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";
import { AppTextInput } from "../../../components";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const BankDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Bank Details
      </Text>

      <View style={styles.card}>

        <AppTextInput
          title="Bank Name"
          placeholder="Enter bank name"
          value={data.bankName}
          onChangeText={text =>
            updateData("bankName", text)
          }
        />

        <AppTextInput
          title="Account Holder Name"
          placeholder="Enter account holder name"
          value={data.accountHolder}
          onChangeText={text =>
            updateData("accountHolder", text)
          }
        />

        <AppTextInput
          title="Account Number"
          placeholder="Enter account number"
          keyboardType="numeric"
          value={data.accountNumber}
          onChangeText={text =>
            updateData("accountNumber", text)
          }
        />

        <AppTextInput
          title="Confirm Account Number"
          placeholder="Re-enter account number"
          keyboardType="numeric"
          value={data.confirmAccount}
          onChangeText={text =>
            updateData("confirmAccount", text)
          }
        />

        <AppTextInput
          title="IFSC Code"
          placeholder="SBIN0001234"
          value={data.ifsc}
          onChangeText={text =>
            updateData(
              "ifsc",
              text.toUpperCase()
            )
          }
        />

        <AppTextInput
          title="Branch Name"
          placeholder="Enter branch name"
          value={data.branch}
          onChangeText={text =>
            updateData("branch", text)
          }
        />

        <AppTextInput
          title="Account Type"
          placeholder="Savings / Current"
          value={data.accountType}
          onChangeText={text =>
            updateData(
              "accountType",
              text
            )
          }
        />

        <View style={styles.switchRow}>

          <View>
            <Text style={styles.switchTitle}>
              Primary Account
            </Text>

            <Text style={styles.switchSub}>
              Use for investment payouts
            </Text>
          </View>

          <Switch
            value={isPrimary}
            onValueChange={value => {
              setIsPrimary(value);
              updateData(
                "primaryAccount",
                value.toString()
              );
            }}
            trackColor={{
              false: "#D8DDE8",
              true: "#2144B5",
            }}
          />

        </View>

      </View>

    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2144B5",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  switchRow: {
    marginTop: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2144B5",
  },

  switchSub: {
    marginTop: 4,
    fontSize: 13,
    color: "#75849A",
  },
});
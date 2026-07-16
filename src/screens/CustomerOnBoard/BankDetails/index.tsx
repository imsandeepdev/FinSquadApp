import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
} from "react-native";
import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";


interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const BankDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
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
              false: themeColor.borderColor,
              true: themeColor.appTextColor,
            }}
          />

        </View>

      </View>

    </View>
  );
};

export default BankDetails;
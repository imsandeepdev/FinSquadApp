import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDropdown, AppDocumentUpload } from "../../../components";
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

        <AppDropdown
          title="Account Type"
          placeholder="Select account type"
          value={data.accountType}
          options={["Savings", "Current"]}
          onSelect={value => updateData("accountType", value)}
        />

        <AppDocumentUpload
          title="Bank Document"
          docTypeOptions={["Cancelled Cheque", "Bank Passbook", "Bank Statement"]}
          docTypeValue={data.bankDocType}
          onDocTypeSelect={value => updateData("bankDocType", value)}
          imageUri={data.bankDocumentUri}
          onImageSelected={uri => updateData("bankDocumentUri", uri)}
          onImageRemoved={() => updateData("bankDocumentUri", "")}
        />

      </View>

    </View>
  );
};

export default BankDetails;
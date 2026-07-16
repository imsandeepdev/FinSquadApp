import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const InvestmentDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Investment Details
      </Text>

      {/* Investment Summary */}

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          Investment Profile
        </Text>

        <Text style={styles.summaryText}>
          Complete investment details for
          suitable product recommendation.
        </Text>

      </View>

      <View style={styles.card}>

        <AppTextInput
          title="Investment Amount"
          placeholder="₹ Enter amount"
          keyboardType="numeric"
          value={data.investmentAmount}
          onChangeText={(text) =>
            updateData(
              "investmentAmount",
              text
            )
          }
        />

        <AppTextInput
          title="Investment Type"
          placeholder="SIP / Lumpsum"
          value={data.investmentType}
          onChangeText={(text) =>
            updateData(
              "investmentType",
              text
            )
          }
        />

        <AppTextInput
          title="Monthly SIP Amount"
          placeholder="₹ SIP Amount"
          keyboardType="numeric"
          value={data.sipAmount}
          onChangeText={(text) =>
            updateData(
              "sipAmount",
              text
            )
          }
        />

        <AppTextInput
          title="Preferred SIP Date"
          placeholder="1 to 28"
          keyboardType="numeric"
          value={data.sipDate}
          onChangeText={(text) =>
            updateData(
              "sipDate",
              text
            )
          }
        />

        <AppTextInput
          title="Risk Profile"
          placeholder="Low / Medium / High"
          value={data.riskProfile}
          onChangeText={(text) =>
            updateData(
              "riskProfile",
              text
            )
          }
        />

        <AppTextInput
          title="Investment Horizon"
          placeholder="1 Year / 5 Year"
          value={data.horizon}
          onChangeText={(text) =>
            updateData(
              "horizon",
              text
            )
          }
        />

        <AppTextInput
          title="Investment Objective"
          placeholder="Wealth / Retirement"
          value={data.objective}
          onChangeText={(text) =>
            updateData(
              "objective",
              text
            )
          }
        />

        <AppTextInput
          title="Source of Funds"
          placeholder="Salary / Business"
          value={data.sourceFunds}
          onChangeText={(text) =>
            updateData(
              "sourceFunds",
              text
            )
          }
        />

        <AppTextInput
          title="Existing Investor"
          placeholder="Yes / No"
          value={data.existingInvestor}
          onChangeText={(text) =>
            updateData(
              "existingInvestor",
              text
            )
          }
        />

      </View>

    </View>
  );
};

export default InvestmentDetails;
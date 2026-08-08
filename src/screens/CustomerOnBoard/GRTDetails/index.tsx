import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDatePicker, AppDropdown, AppDocumentUpload } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const UNDERSTANDING_OPTIONS = ["Good", "Average", "Poor"];
const RESULT_OPTIONS = ["Pass", "Fail"];

const GRTDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          GRT (Group Recognition Test)
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <Text style={styles.sectionLabel}>
          GRT Details
        </Text>

        <AppTextInput
          title="Group Name"
          placeholder="Enter group name"
          value={data.grtGroupName}
          onChangeText={(text) => updateData("grtGroupName", text)}
        />

        <AppTextInput
          title="No. of Group Members"
          placeholder="Enter number of members"
          keyboardType="numeric"
          maxLength={2}
          value={data.grtMemberCount}
          onChangeText={(text) => updateData("grtMemberCount", text)}
        />

        <AppTextInput
          title="GRT Conducted By"
          placeholder="Enter field officer name"
          value={data.grtConductedBy}
          onChangeText={(text) => updateData("grtConductedBy", text)}
        />

        <AppDatePicker
          title="GRT Date"
          value={data.grtDate}
          onChange={(date) => updateData("grtDate", date)}
          maxDate={new Date()}
        />

        <AppDropdown
          title="Loan Purpose Understanding"
          placeholder="Select rating"
          value={data.grtLoanPurposeUnderstanding}
          options={UNDERSTANDING_OPTIONS}
          onSelect={(value) => updateData("grtLoanPurposeUnderstanding", value)}
        />

        <AppDropdown
          title="Repayment Terms Understanding"
          placeholder="Select rating"
          value={data.grtRepaymentUnderstanding}
          options={UNDERSTANDING_OPTIONS}
          onSelect={(value) => updateData("grtRepaymentUnderstanding", value)}
        />

        <AppDropdown
          title="Group Liability Understanding"
          placeholder="Select rating"
          value={data.grtGroupLiabilityUnderstanding}
          options={UNDERSTANDING_OPTIONS}
          onSelect={(value) => updateData("grtGroupLiabilityUnderstanding", value)}
        />

        <AppTextInput
          title="Members Present (Attendance)"
          placeholder="Enter number of members present"
          keyboardType="numeric"
          maxLength={2}
          value={data.grtMembersPresent}
          onChangeText={(text) => updateData("grtMembersPresent", text)}
        />

        <AppTextInput
          title="GRT Score"
          placeholder="Enter GRT score"
          keyboardType="numeric"
          value={data.grtScore}
          onChangeText={(text) => updateData("grtScore", text)}
        />

        <AppDropdown
          title="GRT Result"
          placeholder="Select result"
          value={data.grtResult}
          options={RESULT_OPTIONS}
          onSelect={(value) => updateData("grtResult", value)}
        />

        <AppTextInput
          title="Remarks"
          placeholder="Enter remarks, if any"
          value={data.grtRemarks}
          onChangeText={(text) => updateData("grtRemarks", text)}
          restInputTextProps={{ multiline: true, numberOfLines: 3 }}
        />

        <AppDocumentUpload
          title="Upload GRT Photo"
          imageUri={data.grtPhotoUri}
          onImageSelected={(uri) => updateData("grtPhotoUri", uri)}
          onImageRemoved={() => updateData("grtPhotoUri", "")}
        />

      </View>

    </View>
  );
};

export default GRTDetails;

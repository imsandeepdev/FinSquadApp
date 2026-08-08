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

const MEETING_DAY_OPTIONS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CentreFormationStep: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Centre Formation
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <Text style={styles.sectionLabel}>
          Centre Details
        </Text>

        <AppTextInput
          title="Centre Name"
          placeholder="Enter centre name"
          value={data.cfCentreName}
          onChangeText={(text) => updateData("cfCentreName", text)}
        />

        <AppTextInput
          title="Centre Code"
          placeholder="Enter centre code"
          value={data.cfCentreCode}
          onChangeText={(text) => updateData("cfCentreCode", text)}
        />

        <AppTextInput
          title="Centre Leader Name"
          placeholder="Enter centre leader name"
          value={data.cfLeaderName}
          onChangeText={(text) => updateData("cfLeaderName", text)}
        />

        <AppTextInput
          title="No. of Groups in Centre"
          placeholder="Enter number of groups"
          keyboardType="numeric"
          maxLength={2}
          value={data.cfGroupCount}
          onChangeText={(text) => updateData("cfGroupCount", text)}
        />

        <AppTextInput
          title="No. of Members in Centre"
          placeholder="Enter number of members"
          keyboardType="numeric"
          maxLength={3}
          value={data.cfMemberCount}
          onChangeText={(text) => updateData("cfMemberCount", text)}
        />

        <AppDropdown
          title="Meeting Day"
          placeholder="Select meeting day"
          value={data.cfMeetingDay}
          options={MEETING_DAY_OPTIONS}
          onSelect={(value) => updateData("cfMeetingDay", value)}
        />

        <AppTextInput
          title="Meeting Time"
          placeholder="e.g. 10:00 AM"
          value={data.cfMeetingTime}
          onChangeText={(text) => updateData("cfMeetingTime", text)}
        />

        <AppTextInput
          title="Meeting Place / Address"
          placeholder="Enter meeting place or address"
          value={data.cfMeetingPlace}
          onChangeText={(text) => updateData("cfMeetingPlace", text)}
        />

        <AppDatePicker
          title="Centre Formation Date"
          value={data.cfFormationDate}
          onChange={(date) => updateData("cfFormationDate", date)}
          maxDate={new Date()}
        />

        <AppTextInput
          title="Field Officer Name"
          placeholder="Enter field officer name"
          value={data.cfFieldOfficerName}
          onChangeText={(text) => updateData("cfFieldOfficerName", text)}
        />

        <AppDocumentUpload
          title="Upload Centre Photo"
          imageUri={data.cfPhotoUri}
          onImageSelected={(uri) => updateData("cfPhotoUri", uri)}
          onImageRemoved={() => updateData("cfPhotoUri", "")}
        />

      </View>

    </View>
  );
};

export default CentreFormationStep;

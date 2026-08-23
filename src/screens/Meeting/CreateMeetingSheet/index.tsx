import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppButton, AppDatePicker, AppDropdown, AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { NewMeetingInput } from "../../../utils/provider/meetingProvider";
import { TIME_SLOTS } from "../const";
import { getStyles } from "./styles";

export interface CreateMeetingSheetProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (input: NewMeetingInput) => void;
}

const CreateMeetingSheet: React.FC<CreateMeetingSheetProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  // Normalized to midnight — CalendarModal compares this directly against
  // each day cell (also midnight). Using the raw current time here would
  // make *today itself* compare as "less than minDate" and disable it.
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);
  const oneYearFromNow = useMemo(() => {
    const d = new Date(today);
    d.setFullYear(d.getFullYear() + 1);
    return d;
  }, [today]);

  const [personName, setPersonName] = useState("");
  const [mobile, setMobile] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const resetForm = () => {
    setPersonName("");
    setMobile("");
    setPurpose("");
    setDate("");
    setTime("");
    setNotes("");
    setNameError("");
    setMobileError("");
    setDateError("");
    setTimeError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validate = () => {
    let valid = true;

    if (!personName.trim()) {
      setNameError("Enter the person's name.");
      valid = false;
    } else {
      setNameError("");
    }

    const digitsOnly = mobile.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setMobileError("Enter a valid 10-digit mobile number.");
      valid = false;
    } else {
      setMobileError("");
    }

    if (!date) {
      setDateError("Select a date.");
      valid = false;
    } else {
      setDateError("");
    }

    if (!time) {
      setTimeError("Select a time.");
      valid = false;
    } else {
      setTimeError("");
    }

    return valid;
  };

  const onSave = () => {
    if (!validate()) return;

    onCreate({
      personName: personName.trim(),
      mobile: mobile.trim(),
      purpose: purpose.trim(),
      date,
      time,
      notes: notes.trim(),
    });

    resetForm();
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <Pressable style={styles.backdrop} onPress={handleClose} />

      <KeyboardAvoidingView
        style={styles.sheet}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.grabber} />

        <View style={styles.header}>
          <View style={styles.headerTitleWrap}>
            <Text style={styles.headerTitle}>Schedule Meeting</Text>
            <Text style={styles.headerSubtitle}>
              Fill in the details for a reminder
            </Text>
          </View>

          <Pressable style={styles.closeButton} onPress={handleClose} hitSlop={10}>
            <Ionicons name="close" size={18} color={themeColor.primaryText} />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <AppTextInput
            title="Person's Name"
            placeholder="Enter full name"
            leftIcon="person-outline"
            value={personName}
            onChangeText={setPersonName}
            isError={!!nameError}
            errorMessage={nameError}
          />

          <AppTextInput
            title="Mobile Number"
            placeholder="Enter mobile number"
            leftIcon="call-outline"
            keyboardType="phone-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
            isError={!!mobileError}
            errorMessage={mobileError}
          />

          <View style={styles.row}>
            <View style={styles.halfField}>
              <AppDatePicker
                title="Date"
                value={date}
                onChange={setDate}
                minDate={today}
                // CalendarModal defaults maxDate to "today" (it's built as
                // a DOB-style picker) unless told otherwise — a meeting
                // reminder needs to look forward, not backward, so give
                // it a real upper bound a year out.
                maxDate={oneYearFromNow}
                isError={!!dateError}
                errorMessage={dateError}
              />
            </View>

            <View style={styles.halfFieldSpacer} />

            <View style={styles.halfField}>
              <AppDropdown
                title="Time"
                placeholder="Select time"
                value={time}
                options={TIME_SLOTS}
                onSelect={setTime}
                leftIcon="time-outline"
                sheetTitle="Select Time"
                isError={!!timeError}
                errorMessage={timeError}
              />
            </View>
          </View>

          <AppTextInput
            title="Purpose (optional)"
            placeholder="e.g. Loan discussion, EMI collection"
            leftIcon="chatbubble-ellipses-outline"
            value={purpose}
            onChangeText={setPurpose}
          />

          <AppTextInput
            title="Notes (optional)"
            placeholder="Any additional notes"
            leftIcon="document-text-outline"
            value={notes}
            onChangeText={setNotes}
          />

          <AppButton
            title="Create Meeting"
            onPress={onSave}
            containerStyle={styles.saveButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CreateMeetingSheet;

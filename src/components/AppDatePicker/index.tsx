import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import CalendarModal from "../CalendarModal";

export interface AppDatePickerProps {
  title?: string;
  placeholder?: string;
  /** Value as "DD/MM/YYYY", matching how dates are stored across the app's forms. */
  value?: string;
  onChange: (formatted: string) => void;
  maxDate?: Date;
  minDate?: Date;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const pad = (n: number) => String(n).padStart(2, "0");

export const formatDate = (date: Date): string =>
  `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;

export const parseDate = (value?: string): Date | undefined => {
  if (!value) return undefined;
  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value.trim());
  if (!match) return undefined;
  const [, d, m, y] = match;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return isNaN(date.getTime()) ? undefined : date;
};

const AppDatePicker: React.FC<AppDatePickerProps> = ({
  title = "",
  placeholder = "DD/MM/YYYY",
  value,
  onChange,
  maxDate,
  minDate,
  isError = false,
  errorMessage = "",
  disabled = false,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [visible, setVisible] = useState(false);

  const selectedDate = parseDate(value);

  return (
    <View style={[styles.topView, disabled && { opacity: 0.5 }]}>
      {title ? <Text style={styles.headerTitle}>{title}</Text> : null}

      <Pressable
        onPress={() => !disabled && setVisible(true)}
        style={[styles.mainView, { borderColor: isError ? themeColor.errorColor : themeColor.placeHolder }]}
      >
        <View style={styles.leftIconView}>
          <Ionicons name="calendar-outline" size={20} color={themeColor.placeHolder} />
        </View>

        <Text style={[styles.valueText, !value && styles.placeholderText]}>
          {value || placeholder}
        </Text>

        <Ionicons name="chevron-down" size={16} color={themeColor.placeHolder} style={styles.chevron} />
      </Pressable>

      {isError && !!errorMessage && (
        <Text style={styles.errorText} numberOfLines={1}>{errorMessage}</Text>
      )}

      <CalendarModal
        visible={visible}
        onClose={() => setVisible(false)}
        initialDate={selectedDate}
        maxDate={maxDate}
        minDate={minDate}
        onSelect={date => onChange(formatDate(date))}
      />
    </View>
  );
};

export default AppDatePicker;

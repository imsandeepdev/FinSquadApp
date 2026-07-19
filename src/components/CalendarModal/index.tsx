import React, { useEffect, useMemo, useState } from "react";
import { Modal, View, Text, Pressable, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles, YEAR_ROW_HEIGHT } from "./styles";

export interface CalendarModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (date: Date) => void;
  /** Currently selected date, if any - used to open the calendar on the right month/year and highlight it. */
  initialDate?: Date;
  /** Latest selectable date. Defaults to today (common for a Date of Birth picker). */
  maxDate?: Date;
  /** Earliest selectable date. Defaults to 100 years ago. */
  minDate?: Date;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

type PickerMode = "day" | "month" | "year";

const CalendarModal: React.FC<CalendarModalProps> = ({
  visible,
  onClose,
  onSelect,
  initialDate,
  maxDate,
  minDate,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const today = new Date();
  const effectiveMax = maxDate || today;
  const effectiveMin = minDate || new Date(today.getFullYear() - 100, 0, 1);

  const [viewYear, setViewYear] = useState(() => (initialDate || effectiveMax).getFullYear());
  const [viewMonth, setViewMonth] = useState(() => (initialDate || effectiveMax).getMonth());
  const [mode, setMode] = useState<PickerMode>("day");

  // Re-sync the view every time the modal is (re)opened.
  useEffect(() => {
    if (visible) {
      const base = initialDate || effectiveMax;
      setViewYear(base.getFullYear());
      setViewMonth(base.getMonth());
      setMode("day");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const isDisabled = (d: Date) => d > effectiveMax || d < effectiveMin;

  const daysGrid = useMemo(() => {
    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    const startWeekday = firstOfMonth.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const cells: { date: Date; inMonth: boolean }[] = [];

    for (let i = startWeekday - 1; i >= 0; i--) {
      cells.push({ date: new Date(viewYear, viewMonth - 1, daysInPrevMonth - i), inMonth: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ date: new Date(viewYear, viewMonth, d), inMonth: true });
    }
    let nextDay = 1;
    while (cells.length < 42) {
      cells.push({ date: new Date(viewYear, viewMonth + 1, nextDay), inMonth: false });
      nextDay += 1;
    }
    return cells;
  }, [viewYear, viewMonth]);

  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = effectiveMax.getFullYear(); y >= effectiveMin.getFullYear(); y--) arr.push(y);
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveMax.getFullYear(), effectiveMin.getFullYear()]);

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  const selectDay = (date: Date) => {
    if (isDisabled(date)) return;
    onSelect(date);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <View style={styles.grabber} />

        {mode === "day" && (
          <>
            <View style={styles.header}>
              <Pressable onPress={goPrevMonth} style={styles.navBtn} hitSlop={10}>
                <Ionicons name="chevron-back" size={20} color={themeColor.appColor} />
              </Pressable>

              <View style={styles.headerCenter}>
                <Pressable onPress={() => setMode("month")} style={styles.headerPill}>
                  <Text style={styles.headerText}>{MONTHS[viewMonth]}</Text>
                </Pressable>
                <Pressable onPress={() => setMode("year")} style={styles.headerPill}>
                  <Text style={styles.headerText}>{viewYear}</Text>
                </Pressable>
              </View>

              <Pressable onPress={goNextMonth} style={styles.navBtn} hitSlop={10}>
                <Ionicons name="chevron-forward" size={20} color={themeColor.appColor} />
              </Pressable>
            </View>

            <View style={styles.weekRow}>
              {WEEKDAYS.map(w => (
                <Text key={w} style={styles.weekDayText}>{w}</Text>
              ))}
            </View>

            <View style={styles.daysGrid}>
              {daysGrid.map(({ date, inMonth }, idx) => {
                const disabled = isDisabled(date);
                const today_ = isSameDay(date, today);
                const selected = initialDate ? isSameDay(date, initialDate) : false;

                return (
                  <Pressable
                    key={idx}
                    disabled={disabled}
                    onPress={() => selectDay(date)}
                    style={styles.dayCell}
                  >
                    <View
                      style={[
                        styles.dayCircle,
                        selected && styles.dayCircleSelected,
                        !selected && today_ && styles.dayCircleToday,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dayText,
                          !inMonth && styles.dayTextMuted,
                          disabled && styles.dayTextDisabled,
                          selected && styles.dayTextSelected,
                        ]}
                      >
                        {date.getDate()}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </>
        )}

        {mode === "month" && (
          <View>
            <Text style={styles.pickerTitle}>Select Month</Text>
            <View style={styles.monthGrid}>
              {MONTHS.map((m, idx) => {
                const disabled = viewYear === effectiveMax.getFullYear() && idx > effectiveMax.getMonth();
                const active = viewMonth === idx;
                return (
                  <Pressable
                    key={m}
                    disabled={disabled}
                    onPress={() => {
                      setViewMonth(idx);
                      setMode("day");
                    }}
                    style={[styles.monthCell, active && styles.monthCellActive]}
                  >
                    <Text
                      style={[
                        styles.monthText,
                        active && styles.monthTextActive,
                        disabled && styles.dayTextDisabled,
                      ]}
                    >
                      {m.slice(0, 3)}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}

        {mode === "year" && (
          <View style={styles.yearListWrap}>
            <Text style={styles.pickerTitle}>Select Year</Text>
            <FlatList
              data={years}
              keyExtractor={y => String(y)}
              initialScrollIndex={Math.max(0, years.indexOf(viewYear))}
              getItemLayout={(_, index) => ({ length: YEAR_ROW_HEIGHT, offset: YEAR_ROW_HEIGHT * index, index })}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                const active = item === viewYear;
                return (
                  <Pressable
                    onPress={() => {
                      setViewYear(item);
                      setMode("day");
                    }}
                    style={styles.yearRow}
                  >
                    <Text style={[styles.yearText, active && styles.yearTextActive]}>{item}</Text>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default CalendarModal;

import React, { useMemo, useState } from "react";
import { View, Text, Pressable, Modal, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { AppDropdownOption, AppDropdownProps } from "./types";

const normalize = (opt: string | AppDropdownOption): AppDropdownOption =>
  typeof opt === "string" ? { label: opt, value: opt } : opt;

const AppDropdown: React.FC<AppDropdownProps> = ({
  title = "",
  placeholder = "Select an option",
  value,
  options,
  onSelect,
  leftIcon,
  isError = false,
  errorMessage = "",
  searchable = false,
  sheetTitle,
  disabled = false,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const normalized = useMemo(() => options.map(normalize), [options]);

  const filtered = useMemo(() => {
    if (!searchable || !search.trim()) return normalized;
    return normalized.filter(o => o.label.toLowerCase().includes(search.toLowerCase()));
  }, [normalized, search, searchable]);

  const selected = normalized.find(o => o.value === value);

  const handleSelect = (optValue: string) => {
    onSelect(optValue);
    setVisible(false);
    setSearch("");
  };

  return (
    <View style={[styles.topView, disabled && { opacity: 0.5 }]}>
      {title ? <Text style={styles.headerTitle}>{title}</Text> : null}

      <Pressable
        onPress={() => !disabled && setVisible(true)}
        style={[styles.mainView, { borderColor: isError ? themeColor.errorColor : themeColor.placeHolder }]}
      >
        {leftIcon ? (
          <View style={styles.leftIconView}>
            <Ionicons name={leftIcon} size={20} color={themeColor.placeHolder} />
          </View>
        ) : null}

        <Text style={[styles.valueText, !selected && styles.placeholderText]}>
          {selected ? selected.label : placeholder}
        </Text>

        <Ionicons name="chevron-down" size={16} color={themeColor.placeHolder} style={styles.chevron} />
      </Pressable>

      {isError && !!errorMessage && (
        <Text style={styles.errorText} numberOfLines={1}>{errorMessage}</Text>
      )}

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)} />

        <View style={styles.sheet}>
          <View style={styles.grabber} />

          <Text style={styles.sheetTitle}>{sheetTitle || title || "Select"}</Text>

          {searchable && (
            <View style={styles.searchBox}>
              <Ionicons name="search" size={16} color={themeColor.placeHolder} />
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search..."
                placeholderTextColor={themeColor.placeHolder}
                style={styles.searchInput}
              />
            </View>
          )}

          <FlatList
            data={filtered}
            keyExtractor={o => o.value}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              const active = item.value === value;
              return (
                <Pressable
                  onPress={() => handleSelect(item.value)}
                  style={[styles.optionRow, active && styles.optionRowActive]}
                >
                  <Text style={[styles.optionText, active && styles.optionTextActive]}>
                    {item.label}
                  </Text>
                  {active && (
                    <Ionicons name="checkmark-circle" size={20} color={themeColor.appColor} />
                  )}
                </Pressable>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No matching options.</Text>
            }
          />
        </View>
      </Modal>
    </View>
  );
};

export default AppDropdown;
export type { AppDropdownOption, AppDropdownProps } from "./types";

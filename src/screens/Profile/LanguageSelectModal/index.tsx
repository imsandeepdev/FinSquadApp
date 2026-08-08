import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../../utils/provider/themeProvider";
import { useLanguage } from "../../../utils/provider/languageProvider";
import { AVAILABLE_LANGUAGES } from "../../../utils/i18n";
import { getStyles } from "./styles";

export interface LanguageSelectModalProps {
  visible: boolean;
  onClose: () => void;
}

const LanguageSelectModal: React.FC<LanguageSelectModalProps> = ({ visible, onClose }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { language, setLanguage, t } = useLanguage();

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <View style={styles.grabber} />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("profile.languageModal.title")}</Text>
          <Pressable onPress={onClose} hitSlop={10}>
            <Ionicons name="close" size={22} color={themeColor.primaryText} />
          </Pressable>
        </View>

        <Text style={styles.subtitle}>{t("profile.languageModal.subtitle")}</Text>

        {AVAILABLE_LANGUAGES.map(option => {
          const active = option.code === language;
          return (
            <Pressable
              key={option.code}
              style={[styles.optionRow, active && styles.optionRowActive]}
              onPress={() => {
                setLanguage(option.code);
                onClose();
              }}
            >
              <Ionicons
                name={active ? "radio-button-on" : "radio-button-off"}
                size={20}
                color={active ? themeColor.appColor : themeColor.placeHolder}
              />

              <View style={styles.optionTextWrap}>
                <Text style={styles.optionNativeLabel}>{option.nativeLabel}</Text>
                {option.englishLabel !== option.nativeLabel && (
                  <Text style={styles.optionEnglishLabel}>{option.englishLabel}</Text>
                )}
              </View>
            </Pressable>
          );
        })}

        <View style={styles.moreComingRow}>
          <Ionicons name="add-circle-outline" size={14} color={themeColor.placeHolder} />
          <Text style={styles.moreComingText}>{t("profile.languageModal.moreComingSoon")}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageSelectModal;

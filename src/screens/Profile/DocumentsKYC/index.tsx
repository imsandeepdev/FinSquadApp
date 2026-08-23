import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppDocumentUpload, AppHeader, StoryScreen } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

const DocumentsKYCScreen = () => {
  const navigation = useNavigation<any>();
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [aadhaarUri, setAadhaarUri] = useState("");
  const [panUri, setPanUri] = useState("");
  const [photoUri, setPhotoUri] = useState("");

  const allUploaded = !!aadhaarUri && !!panUri && !!photoUri;

  const onSave = () => {
    if (!allUploaded) {
      Alert.alert(
        "Documents pending",
        "Please upload Aadhaar Card, PAN Card and your Photograph before saving."
      );
      return;
    }

    Alert.alert(
      "Documents submitted",
      "Your KYC documents have been submitted for verification.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <StoryScreen>
      <AppHeader
        title="Documents & KYC"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.statusBanner}>
          <View style={styles.statusIconWrap}>
            <Ionicons
              name={allUploaded ? "shield-checkmark" : "shield-outline"}
              size={18}
              color={allUploaded ? themeColor.successColor : themeColor.appColor}
            />
          </View>

          <View style={styles.statusTextWrap}>
            <Text style={styles.statusTitle}>
              {allUploaded ? "All documents uploaded" : "KYC verification pending"}
            </Text>
            <Text style={styles.statusSubtitle}>
              {allUploaded
                ? "Submit for verification by your branch admin."
                : "Upload the documents below to complete your KYC."}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTitle}>Aadhaar Card</Text>
            {!!aadhaarUri && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark-circle" size={11} color={themeColor.successColor} />
                <Text style={styles.verifiedBadgeText}>Uploaded</Text>
              </View>
            )}
          </View>

          <AppDocumentUpload
            title="Aadhaar Card"
            imageUri={aadhaarUri}
            onImageSelected={setAadhaarUri}
            onImageRemoved={() => setAadhaarUri("")}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTitle}>PAN Card</Text>
            {!!panUri && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark-circle" size={11} color={themeColor.successColor} />
                <Text style={styles.verifiedBadgeText}>Uploaded</Text>
              </View>
            )}
          </View>

          <AppDocumentUpload
            title="PAN Card"
            imageUri={panUri}
            onImageSelected={setPanUri}
            onImageRemoved={() => setPanUri("")}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTitle}>Photograph</Text>
            {!!photoUri && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark-circle" size={11} color={themeColor.successColor} />
                <Text style={styles.verifiedBadgeText}>Uploaded</Text>
              </View>
            )}
          </View>

          <AppDocumentUpload
            title="Photograph"
            imageUri={photoUri}
            onImageSelected={setPhotoUri}
            onImageRemoved={() => setPhotoUri("")}
          />
        </View>

        <AppButton
          title="Submit for Verification"
          onPress={onSave}
          containerStyle={styles.saveButton}
        />

      </ScrollView>
    </StoryScreen>
  );
};

export default DocumentsKYCScreen;

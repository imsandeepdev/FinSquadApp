import React from "react";
import { View, Text, Pressable, Image, Alert, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from "react-native-image-picker";

import { useTheme } from "../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import AppDropdown from "../AppDropdown";
import { AppDocumentUploadProps } from "./types";

const PICKER_OPTIONS = {
  mediaType: "photo" as const,
  quality: 0.7 as const,
  maxWidth: 1280,
  maxHeight: 1280,
};

const AppDocumentUpload: React.FC<AppDocumentUploadProps> = ({
  title,
  docTypeLabel = "Document Type",
  docTypeOptions,
  docTypeValue,
  onDocTypeSelect,
  imageUri,
  onImageSelected,
  onImageRemoved,
  isError = false,
  errorMessage = "",
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const canUpload = !!docTypeValue;

  const handlePickerResponse = (response: ImagePickerResponse) => {
    if (response.didCancel) return;
    if (response.errorCode) {
      Alert.alert(
        "Couldn't open picker",
        response.errorMessage || "Please check camera/photo permissions in Settings."
      );
      return;
    }
    const uri = response.assets?.[0]?.uri;
    if (uri) onImageSelected(uri);
  };

  const openCamera = () => launchCamera(PICKER_OPTIONS, handlePickerResponse);

  const openGallery = () => launchImageLibrary(PICKER_OPTIONS, handlePickerResponse);

  const handleUploadPress = () => {
    if (!canUpload) {
      Alert.alert("Select document type", "Please select a document type before uploading.");
      return;
    }

    Alert.alert(
      `Upload ${docTypeValue}`,
      undefined,
      Platform.OS === "ios"
        ? [
            { text: "Take Photo", onPress: openCamera },
            { text: "Choose from Gallery", onPress: openGallery },
            { text: "Cancel", style: "cancel" },
          ]
        : [
            { text: "Camera", onPress: openCamera },
            { text: "Gallery", onPress: openGallery },
            { text: "Cancel", style: "cancel" },
          ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.topView}>
      {title ? <Text style={styles.headerTitle}>{title}</Text> : null}

      <AppDropdown
        title={docTypeLabel}
        placeholder="Select document type"
        value={docTypeValue}
        options={docTypeOptions}
        onSelect={value => {
          onDocTypeSelect(value);
          // Selecting a different document type invalidates the previously
          // uploaded image for the old type.
          if (imageUri) onImageRemoved?.();
        }}
        isError={isError}
        errorMessage={errorMessage}
      />

      {imageUri ? (
        <View style={styles.previewRow}>
          <Image source={{ uri: imageUri }} style={styles.previewThumb} />

          <View style={styles.previewInfo}>
            <Text style={styles.previewFileText} numberOfLines={1}>
              {docTypeValue} uploaded
            </Text>

            <View style={styles.previewActionsRow}>
              <Pressable style={styles.previewActionBtn} onPress={handleUploadPress}>
                <Ionicons name="refresh-outline" size={16} color={themeColor.appColor} />
                <Text style={[styles.previewActionText, { color: themeColor.appColor }]}>
                  Replace
                </Text>
              </Pressable>

              <Pressable style={styles.previewActionBtn} onPress={() => onImageRemoved?.()}>
                <Ionicons name="trash-outline" size={16} color={themeColor.errorColor} />
                <Text style={[styles.previewActionText, { color: themeColor.errorColor }]}>
                  Remove
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <Pressable
          onPress={handleUploadPress}
          style={[styles.uploadTile, !canUpload && styles.uploadTileDisabled]}
        >
          <View style={styles.uploadIconWrap}>
            <Ionicons name="cloud-upload-outline" size={20} color={themeColor.appColor} />
          </View>

          <View style={styles.uploadTextWrap}>
            <Text style={styles.uploadTitleText}>
              {canUpload ? `Upload ${docTypeValue}` : "Select document type first"}
            </Text>
            <Text style={styles.uploadSubText}>
              {canUpload ? "Tap to take a photo or choose from gallery" : "Upload unlocks once a type is chosen"}
            </Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default AppDocumentUpload;
export type { AppDocumentUploadProps } from "./types";

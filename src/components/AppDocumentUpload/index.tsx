import React, { useState } from "react";
import { View, Text, Pressable, Image, Alert, Platform, Modal } from "react-native";
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

interface PreviewSlot {
  label: string;
  uri: string;
  locked?: boolean;
  onReplace: () => void;
  onRemove: () => void;
}

const AppDocumentUpload: React.FC<AppDocumentUploadProps> = ({
  title,
  docTypeLabel = "Document Type",
  docTypeOptions,
  docTypeValue,
  onDocTypeSelect,
  imageUri,
  onImageSelected,
  onImageRemoved,
  frontImageUri,
  backImageUri,
  onFrontImageSelected,
  onBackImageSelected,
  onFrontImageRemoved,
  onBackImageRemoved,
  isError = false,
  errorMessage = "",
  disabled = false,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [previewSlot, setPreviewSlot] = useState<PreviewSlot | null>(null);

  const isFrontBackMode = !!(onFrontImageSelected || onBackImageSelected);
  const canUpload = !!docTypeValue && !disabled;
  const lockedMessage = "Synced from Nominee — uncheck \"Same as Nominee\" to edit";

  // On a native build where react-native-image-picker's native module hasn't
  // been linked yet (pod install / native rebuild pending after adding the
  // dependency), calling into it throws synchronously instead of going
  // through the response callback — guard both entry points so that shows
  // as a clear message instead of a crash.
  const NATIVE_MODULE_MISSING_MSG =
    "Photo upload isn't wired into this build yet. Run `npm install` (or yarn) then `cd ios && pod install` and do a full native rebuild — reloading JS alone won't pick up the new native module.";

  const handlePickerResponse = (response: ImagePickerResponse, onSelected: (uri: string) => void) => {
    if (response.didCancel) return;
    if (response.errorCode) {
      Alert.alert(
        "Couldn't open picker",
        response.errorMessage || "Please check camera/photo permissions in Settings."
      );
      return;
    }
    const uri = response.assets?.[0]?.uri;
    if (uri) onSelected(uri);
  };

  const openCamera = (onSelected: (uri: string) => void) => {
    try {
      launchCamera(PICKER_OPTIONS, r => handlePickerResponse(r, onSelected));
    } catch (e) {
      Alert.alert("Camera unavailable", NATIVE_MODULE_MISSING_MSG);
    }
  };

  const openGallery = (onSelected: (uri: string) => void) => {
    try {
      launchImageLibrary(PICKER_OPTIONS, r => handlePickerResponse(r, onSelected));
    } catch (e) {
      Alert.alert("Gallery unavailable", NATIVE_MODULE_MISSING_MSG);
    }
  };

  const promptUpload = (label: string, onSelected: (uri: string) => void) => {
    if (!canUpload) {
      Alert.alert("Select document type", "Please select a document type before uploading.");
      return;
    }

    Alert.alert(
      `Upload ${label}`,
      undefined,
      Platform.OS === "ios"
        ? [
            { text: "Take Photo", onPress: () => openCamera(onSelected) },
            { text: "Choose from Gallery", onPress: () => openGallery(onSelected) },
            { text: "Cancel", style: "cancel" },
          ]
        : [
            { text: "Camera", onPress: () => openCamera(onSelected) },
            { text: "Gallery", onPress: () => openGallery(onSelected) },
            { text: "Cancel", style: "cancel" },
          ],
      { cancelable: true }
    );
  };

  const confirmRemove = (label: string, onRemoved?: () => void) => {
    Alert.alert(
      "Remove document?",
      `This will delete the uploaded ${label} photo.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setPreviewSlot(null);
            onRemoved?.();
          },
        },
      ]
    );
  };

  // ---- Single-image mode (e.g. Bank Details) ----
  const renderSingleMode = () => (
    <>
      {imageUri ? (
        <View style={styles.previewRow}>
          <Pressable
            style={styles.previewThumbWrap}
            onPress={() =>
              setPreviewSlot({
                label: docTypeValue || "Document",
                uri: imageUri,
                onReplace: () => promptUpload(docTypeValue || "Document", onImageSelected!),
                onRemove: () => confirmRemove(docTypeValue || "Document", onImageRemoved),
              })
            }
          >
            <Image source={{ uri: imageUri }} style={styles.previewThumb} />

            <Pressable
              style={styles.removeBadge}
              onPress={() => confirmRemove(docTypeValue || "Document", onImageRemoved)}
              hitSlop={8}
            >
              <Ionicons name="close" size={13} color={themeColor.white} />
            </Pressable>
          </Pressable>

          <View style={styles.previewInfo}>
            <Text style={styles.previewFileText} numberOfLines={1}>
              {docTypeValue} uploaded
            </Text>

            <View style={styles.previewActionsRow}>
              <Pressable
                style={styles.previewActionBtn}
                onPress={() =>
                  setPreviewSlot({
                    label: docTypeValue || "Document",
                    uri: imageUri,
                    onReplace: () => promptUpload(docTypeValue || "Document", onImageSelected!),
                    onRemove: () => confirmRemove(docTypeValue || "Document", onImageRemoved),
                  })
                }
              >
                <Ionicons name="eye-outline" size={16} color={themeColor.appColor} />
                <Text style={[styles.previewActionText, { color: themeColor.appColor }]}>
                  View
                </Text>
              </Pressable>

              <Pressable
                style={styles.previewActionBtn}
                onPress={() => promptUpload(docTypeValue || "Document", onImageSelected!)}
              >
                <Ionicons name="refresh-outline" size={16} color={themeColor.appColor} />
                <Text style={[styles.previewActionText, { color: themeColor.appColor }]}>
                  Replace
                </Text>
              </Pressable>

              <Pressable
                style={styles.previewActionBtn}
                onPress={() => confirmRemove(docTypeValue || "Document", onImageRemoved)}
              >
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
          onPress={() => promptUpload(docTypeValue || "Document", onImageSelected!)}
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
    </>
  );

  // ---- Front/back mode (e.g. Nominee / Co-Applicant ID proof) ----
  const renderSlot = (
    side: "Front Side" | "Back Side",
    uri: string | undefined,
    onSelected: ((uri: string) => void) | undefined,
    onRemoved: (() => void) | undefined
  ) => {
    const label = `${docTypeValue || "Document"} - ${side}`;

    if (uri) {
      return (
        <Pressable
          style={[styles.slotCard, styles.slotCardFilled]}
          onPress={() =>
            setPreviewSlot({
              label,
              uri,
              locked: disabled,
              onReplace: () => promptUpload(label, onSelected!),
              onRemove: () => confirmRemove(label, onRemoved),
            })
          }
        >
          <Image source={{ uri }} style={styles.slotImage} resizeMode="cover" />

          <View style={styles.slotUploadedTag}>
            <Text style={styles.slotUploadedTagText}>{side}</Text>
          </View>

          {!disabled && (
            <Pressable
              style={styles.slotRemoveBadge}
              onPress={() => confirmRemove(label, onRemoved)}
              hitSlop={8}
            >
              <Ionicons name="close" size={13} color={themeColor.white} />
            </Pressable>
          )}
        </Pressable>
      );
    }

    return (
      <Pressable
        style={[styles.slotCard, (!canUpload || disabled) && styles.slotCardDisabled]}
        onPress={() => {
          if (disabled) return;
          promptUpload(label, onSelected!);
        }}
      >
        <View style={styles.slotIconWrap}>
          <Ionicons name="camera-outline" size={16} color={themeColor.appColor} />
        </View>
        <Text style={styles.slotLabel}>{side}</Text>
        <Text style={styles.slotSubLabel}>
          {disabled ? lockedMessage : canUpload ? "Tap to upload" : "Select doc type first"}
        </Text>
      </Pressable>
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
          // Selecting a different document type invalidates whatever was
          // previously uploaded against the old type.
          if (isFrontBackMode) {
            if (frontImageUri) onFrontImageRemoved?.();
            if (backImageUri) onBackImageRemoved?.();
          } else if (imageUri) {
            onImageRemoved?.();
          }
        }}
        isError={isError}
        errorMessage={errorMessage}
        disabled={disabled}
      />

      {isFrontBackMode ? (
        <View style={styles.slotsRow}>
          {renderSlot("Front Side", frontImageUri, onFrontImageSelected, onFrontImageRemoved)}
          {renderSlot("Back Side", backImageUri, onBackImageSelected, onBackImageRemoved)}
        </View>
      ) : (
        renderSingleMode()
      )}

      {/* Full-screen preview, shared by both modes */}
      <Modal
        visible={!!previewSlot}
        transparent
        animationType="fade"
        onRequestClose={() => setPreviewSlot(null)}
      >
        <View style={styles.modalBackdrop}>
          <Text style={styles.modalDocLabel} numberOfLines={1}>
            {previewSlot?.label}
          </Text>

          <Pressable
            style={styles.modalCloseBtn}
            onPress={() => setPreviewSlot(null)}
            hitSlop={8}
          >
            <Ionicons name="close" size={20} color={themeColor.white} />
          </Pressable>

          {previewSlot ? (
            <Image
              source={{ uri: previewSlot.uri }}
              style={styles.modalImage}
              resizeMode="contain"
            />
          ) : null}

          {previewSlot?.locked ? (
            <Text style={styles.modalLockedNote}>{lockedMessage}</Text>
          ) : (
            <View style={styles.modalActionsRow}>
              <Pressable
                style={[styles.modalActionBtn, { backgroundColor: themeColor.appColor }]}
                onPress={() => {
                  const slot = previewSlot;
                  setPreviewSlot(null);
                  slot?.onReplace();
                }}
              >
                <Ionicons name="refresh-outline" size={16} color={themeColor.white} />
                <Text style={styles.modalActionText}>Replace</Text>
              </Pressable>

              <Pressable
                style={[styles.modalActionBtn, { backgroundColor: themeColor.errorColor }]}
                onPress={() => previewSlot?.onRemove()}
              >
                <Ionicons name="trash-outline" size={16} color={themeColor.white} />
                <Text style={styles.modalActionText}>Remove</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default AppDocumentUpload;
export type { AppDocumentUploadProps } from "./types";

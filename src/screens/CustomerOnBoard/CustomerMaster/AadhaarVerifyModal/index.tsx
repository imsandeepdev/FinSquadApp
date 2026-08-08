import React, { useEffect, useState } from "react";
import { Modal, View, Text, Pressable, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppTextInput, AppButton } from "../../../../components";
import { useTheme } from "../../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { fetchAadhaarDetails, AadhaarLookupResult } from "../mockAadhaarApi";
import {
  captureFingerprint,
  sendBiometricOtp,
  verifyBiometricOtp,
  DEMO_OTP,
} from "../mockBiometricAuth";

const AADHAAR_LENGTH = 12;
const OTP_LENGTH = 6;

type VerifyMethod = "manual" | "biometric";

type BioStage =
  | "idle"
  | "scanning"
  | "scanned"
  | "sendingOtp"
  | "otpSent"
  | "verifying";

export interface AadhaarVerifyModalProps {
  visible: boolean;
  onClose: () => void;
  initialAadhaar?: string;
  /** Called once demographic data has been fetched and the user confirms it. */
  onVerified: (aadhaarNumber: string, result: AadhaarLookupResult) => void;
}

const AadhaarVerifyModal: React.FC<AadhaarVerifyModalProps> = ({
  visible,
  onClose,
  initialAadhaar,
  onVerified,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const [method, setMethod] = useState<VerifyMethod>("manual");
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarErr, setAadhaarErr] = useState("");

  // MANUAL (enter Aadhaar number) flow
  const [manualFetching, setManualFetching] = useState(false);
  const [manualError, setManualError] = useState("");

  // BIOMETRIC (fingerprint device) flow
  const [bioStage, setBioStage] = useState<BioStage>("idle");
  const [bioError, setBioError] = useState("");
  const [mobileMasked, setMobileMasked] = useState("");
  const [otp, setOtp] = useState("");

  // Shared: the demographic result, once fetched by either method.
  const [result, setResult] = useState<AadhaarLookupResult | null>(null);

  // Reset everything each time the modal is (re)opened.
  useEffect(() => {
    if (visible) {
      setMethod("manual");
      setAadhaar(initialAadhaar || "");
      setAadhaarErr("");
      setManualFetching(false);
      setManualError("");
      setBioStage("idle");
      setBioError("");
      setMobileMasked("");
      setOtp("");
      setResult(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleAadhaarChange = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "").slice(0, AADHAAR_LENGTH);
    setAadhaar(digitsOnly);
    setAadhaarErr("");
    setManualError("");
    setBioError("");
    setBioStage("idle");
    setResult(null);
  };

  const switchMethod = (next: VerifyMethod) => {
    if (next === method) return;
    setMethod(next);
    setManualError("");
    setBioError("");
    setBioStage("idle");
    setResult(null);
  };

  const isValidAadhaar = aadhaar.length === AADHAAR_LENGTH;

  // ---------- MANUAL FLOW ----------
  const runManualFetch = () => {
    if (!isValidAadhaar) {
      setAadhaarErr(`Enter a valid ${AADHAAR_LENGTH}-digit Aadhaar number`);
      return;
    }
    setManualFetching(true);
    setManualError("");

    fetchAadhaarDetails(aadhaar)
      .then(setResult)
      .catch((err: Error) => setManualError(err.message))
      .finally(() => setManualFetching(false));
  };

  // ---------- BIOMETRIC FLOW ----------
  const startBiometricScan = () => {
    if (!isValidAadhaar) {
      setAadhaarErr(`Enter a valid ${AADHAAR_LENGTH}-digit Aadhaar number`);
      return;
    }
    setBioError("");
    setBioStage("scanning");

    captureFingerprint(aadhaar)
      .then(() => {
        setBioStage("scanned");
        setBioStage("sendingOtp");
        return sendBiometricOtp(aadhaar);
      })
      .then(res => {
        setMobileMasked(res.mobileMasked);
        setBioStage("otpSent");
      })
      .catch((err: Error) => {
        setBioError(err.message);
        setBioStage("idle");
      });
  };

  const handleVerifyOtp = () => {
    if (otp.length !== OTP_LENGTH) {
      setBioError(`Enter the ${OTP_LENGTH}-digit OTP`);
      return;
    }
    setBioError("");
    setBioStage("verifying");

    verifyBiometricOtp(otp)
      .then(() => fetchAadhaarDetails(aadhaar))
      .then(setResult)
      .catch((err: Error) => {
        setBioError(err.message);
        setBioStage("otpSent");
      });
  };

  const handleResendOtp = () => {
    setBioError("");
    setOtp("");
    setBioStage("sendingOtp");
    sendBiometricOtp(aadhaar).then(res => {
      setMobileMasked(res.mobileMasked);
      setBioStage("otpSent");
    });
  };

  const handleUseData = () => {
    if (!result) return;
    onVerified(aadhaar, result);
    onClose();
  };

  const handleChangeNumber = () => {
    setResult(null);
    setManualError("");
    setBioError("");
    setBioStage("idle");
    setOtp("");
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <View style={styles.grabber} />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Verify Aadhaar (e-KYC)</Text>
          <Pressable onPress={onClose} hitSlop={10}>
            <Ionicons name="close" size={22} color={themeColor.primaryText} />
          </Pressable>
        </View>

        {/* AADHAAR NUMBER — common to both methods */}
        <AppTextInput
          title="Aadhaar Number"
          placeholder="XXXX XXXX XXXX"
          keyboardType="numeric"
          maxLength={AADHAAR_LENGTH}
          value={aadhaar}
          onChangeText={handleAadhaarChange}
          leftIcon="card-outline"
          isError={!!aadhaarErr}
          errorMessage={aadhaarErr}
          restInputTextProps={{ editable: !result }}
        />

        {!result && (
          <>
            {/* METHOD TOGGLE */}
            <View style={styles.methodRow}>
              <Pressable
                style={[styles.methodTab, method === "manual" && styles.methodTabActive]}
                onPress={() => switchMethod("manual")}
              >
                <Ionicons
                  name="keypad-outline"
                  size={16}
                  color={method === "manual" ? themeColor.appColor : themeColor.placeHolder}
                />
                <Text style={[styles.methodTabText, method === "manual" && styles.methodTabTextActive]}>
                  Aadhaar Number
                </Text>
              </Pressable>

              <Pressable
                style={[styles.methodTab, method === "biometric" && styles.methodTabActive]}
                onPress={() => switchMethod("biometric")}
              >
                <Ionicons
                  name="finger-print-outline"
                  size={16}
                  color={method === "biometric" ? themeColor.appColor : themeColor.placeHolder}
                />
                <Text style={[styles.methodTabText, method === "biometric" && styles.methodTabTextActive]}>
                  Biometric
                </Text>
              </Pressable>
            </View>

            {/* ---- MANUAL METHOD ---- */}
            {method === "manual" && (
              <View style={styles.methodContent}>
                <Text style={styles.helperText}>
                  Enter the Aadhaar number above and fetch e-KYC details directly.
                </Text>

                <AppButton
                  title={manualFetching ? "Fetching…" : "Fetch Details"}
                  onPress={runManualFetch}
                  disabled={manualFetching}
                  containerStyle={styles.actionButton}
                />

                {manualFetching && (
                  <View style={styles.statusRow}>
                    <ActivityIndicator size="small" color={themeColor.appColor} />
                    <Text style={styles.statusText}>Fetching details from Aadhaar…</Text>
                  </View>
                )}

                {!!manualError && !manualFetching && (
                  <View style={styles.statusRow}>
                    <Ionicons name="alert-circle" size={16} color={themeColor.errorColor} />
                    <Text style={[styles.statusText, { color: themeColor.errorColor }]}>
                      {manualError}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {/* ---- BIOMETRIC METHOD ---- */}
            {method === "biometric" && (
              <View style={styles.methodContent}>
                {bioStage === "idle" && (
                  <>
                    <View style={styles.bioIconWrap}>
                      <Ionicons name="finger-print" size={40} color={themeColor.appColor} />
                    </View>
                    <Text style={styles.helperText}>
                      Ask the customer to place their finger on the biometric device to fetch
                      e-KYC details.
                    </Text>

                    <AppButton
                      title="Start Fingerprint Scan"
                      onPress={startBiometricScan}
                      containerStyle={styles.actionButton}
                    />

                    {!!bioError && (
                      <View style={styles.statusRow}>
                        <Ionicons name="alert-circle" size={16} color={themeColor.errorColor} />
                        <Text style={[styles.statusText, { color: themeColor.errorColor }]}>
                          {bioError}
                        </Text>
                      </View>
                    )}
                  </>
                )}

                {(bioStage === "scanning" || bioStage === "scanned") && (
                  <View style={styles.statusRow}>
                    <ActivityIndicator size="small" color={themeColor.appColor} />
                    <Text style={styles.statusText}>
                      Place your finger on the device… scanning
                    </Text>
                  </View>
                )}

                {bioStage === "sendingOtp" && (
                  <View style={styles.statusRow}>
                    <Ionicons name="checkmark-circle" size={16} color={themeColor.successColor} />
                    <Text style={styles.statusText}>
                      Fingerprint captured. Sending OTP to registered mobile…
                    </Text>
                  </View>
                )}

                {(bioStage === "otpSent" || bioStage === "verifying") && (
                  <>
                    <View style={styles.statusRow}>
                      <Ionicons name="checkmark-circle" size={16} color={themeColor.successColor} />
                      <Text style={styles.statusText}>
                        Fingerprint matched. OTP sent to {mobileMasked}.
                      </Text>
                    </View>

                    <AppTextInput
                      title="Enter OTP"
                      placeholder="6-digit OTP"
                      keyboardType="numeric"
                      maxLength={OTP_LENGTH}
                      value={otp}
                      onChangeText={text => {
                        setOtp(text.replace(/[^0-9]/g, "").slice(0, OTP_LENGTH));
                        setBioError("");
                      }}
                      leftIcon="lock-closed-outline"
                      isError={!!bioError}
                      errorMessage={bioError}
                    />

                    <Text style={styles.demoHint}>Demo OTP: {DEMO_OTP}</Text>

                    <AppButton
                      title={bioStage === "verifying" ? "Verifying…" : "Verify OTP"}
                      onPress={handleVerifyOtp}
                      disabled={bioStage === "verifying"}
                      containerStyle={styles.actionButton}
                    />

                    <Pressable onPress={handleResendOtp} style={styles.resendLink}>
                      <Text style={styles.resendLinkText}>Resend OTP</Text>
                    </Pressable>
                  </>
                )}
              </View>
            )}
          </>
        )}

        {/* FETCHED PREVIEW — shared by both methods */}
        {!!result && (
          <View style={styles.previewCard}>
            <View style={styles.previewHeader}>
              <Ionicons name="checkmark-circle" size={18} color={themeColor.successColor} />
              <Text style={styles.previewHeaderText}>e-KYC details fetched</Text>
            </View>

            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Name</Text>
              <Text style={styles.previewValue}>{result.name}</Text>
            </View>
            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>DOB</Text>
              <Text style={styles.previewValue}>{result.dob}</Text>
            </View>
            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Gender</Text>
              <Text style={styles.previewValue}>{result.gender}</Text>
            </View>
            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Address</Text>
              <Text style={styles.previewValue}>{result.address}</Text>
            </View>

            <View style={styles.previewActionRow}>
              <Pressable onPress={handleChangeNumber} style={styles.previewSecondaryButton}>
                <Text style={styles.previewSecondaryButtonText}>Try Again</Text>
              </Pressable>

              <AppButton
                title="Use This Data"
                onPress={handleUseData}
                containerStyle={styles.previewPrimaryButton}
              />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default AadhaarVerifyModal;

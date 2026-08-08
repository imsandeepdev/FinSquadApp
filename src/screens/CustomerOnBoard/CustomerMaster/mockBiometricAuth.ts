/**
 * Mocked biometric e-KYC authentication — simulates a UIDAI biometric
 * device flow (fingerprint capture -> OTP to registered mobile -> OTP
 * match), since there is no real biometric device / backend wired up yet.
 *
 * Flow mirrors a real Aadhaar biometric auth device:
 *   1. Resident places finger on the device -> captureFingerprint()
 *   2. Device/backend sends an OTP to the mobile registered with UIDAI
 *      as a second factor -> sendBiometricOtp()
 *   3. Resident enters the OTP -> verifyBiometricOtp()
 *   4. Only once OTP matches does the demographic e-KYC API get called
 *      (fetchAadhaarDetails, reused from mockAadhaarApi.ts).
 */

const SCAN_DELAY_MS = 1600;
const OTP_SEND_DELAY_MS = 900;
const OTP_VERIFY_DELAY_MS = 800;

// Fixed demo OTP — there's no real SMS gateway, so this is shown in the UI
// as a hint the same way a sandbox/test environment would.
export const DEMO_OTP = "123456";

// Type this Aadhaar number in the demo to see the "fingerprint not matched"
// retry state.
const SCAN_FAIL_DEMO_AADHAAR = "999999999999";

export interface OtpSendResult {
  mobileMasked: string;
}

/** Step 1: simulate placing a finger on the biometric device. */
export const captureFingerprint = (aadhaarNumber: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (aadhaarNumber === SCAN_FAIL_DEMO_AADHAAR) {
        reject(new Error("Fingerprint not matched. Please place your finger again."));
        return;
      }
      resolve();
    }, SCAN_DELAY_MS);
  });
};

// Deterministic demo mobile mask, derived from the Aadhaar number, so the
// same number always "sends" the OTP to the same masked mobile.
const maskMobile = (aadhaarNumber: string) => {
  const lastFour = (aadhaarNumber || "0000").slice(-4);
  return `+91 9XXXXX${lastFour}`;
};

/** Step 2: simulate the device backend sending an OTP to the registered mobile. */
export const sendBiometricOtp = (aadhaarNumber: string): Promise<OtpSendResult> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ mobileMasked: maskMobile(aadhaarNumber) });
    }, OTP_SEND_DELAY_MS);
  });
};

/** Step 3: simulate verifying the OTP entered by the resident. */
export const verifyBiometricOtp = (otp: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === DEMO_OTP) {
        resolve();
      } else {
        reject(new Error("Incorrect OTP. Please try again."));
      }
    }, OTP_VERIFY_DELAY_MS);
  });
};

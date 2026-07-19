/**
 * Mocked Aadhaar e-KYC lookup — no backend yet, so this simulates the shape
 * and latency of a real UIDAI e-KYC / demographic-auth API response.
 *
 * IMPORTANT (intentional scope): a real Aadhaar e-KYC response only ever
 * contains demographic data — name, DOB, gender, address (and photo).
 * It never contains PAN, income, occupation, marital status or a live
 * mobile number, so this mock does not fabricate those fields either.
 * Only name / DOB / address get auto-mapped into the form; everything
 * else stays manual entry, same as it would with a real KYC provider.
 */

export interface AadhaarLookupResult {
  name: string;
  dob: string; // DD/MM/YYYY
  gender: "Male" | "Female" | "Other";
  address: string;
}

// Demo registry — type one of these Aadhaar numbers to see a realistic,
// distinct profile come back. Any other valid 12-digit number falls back
// to a generic (but still deterministic) profile.
const REGISTRY: Record<string, AadhaarLookupResult> = {
  "123412341234": {
    name: "Anita Sharma",
    dob: "14/06/1991",
    gender: "Female",
    address: "House No. 12, Ward 4, Maldah Village, Uttar Pradesh - 221001",
  },
  "234523452345": {
    name: "Vikram Yadav",
    dob: "02/11/1988",
    gender: "Male",
    address: "House No. 45, Shahpur Road, Shahpur, Uttar Pradesh - 221002",
  },
  "345634563456": {
    name: "Pooja Mehta",
    dob: "23/03/1995",
    gender: "Female",
    address: "House No. 8, Kalyanpur Basti, Kalyanpur, Uttar Pradesh - 221003",
  },
};

// Type this one in to see the "record not found" state.
const NOT_FOUND_DEMO_AADHAAR = "000000000000";

const GENERIC_PROFILES: Omit<AadhaarLookupResult, "dob">[] = [
  { name: "Registered Aadhaar Holder", gender: "Other", address: "Address as per UIDAI e-KYC records" },
  { name: "UIDAI Verified Resident", gender: "Other", address: "Address as per UIDAI e-KYC records" },
];

const FETCH_DELAY_MS = 1100;

export const fetchAadhaarDetails = (aadhaarNumber: string): Promise<AadhaarLookupResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!/^[0-9]{12}$/.test(aadhaarNumber)) {
        reject(new Error("Enter a valid 12-digit Aadhaar number"));
        return;
      }

      if (aadhaarNumber === NOT_FOUND_DEMO_AADHAAR) {
        reject(new Error("No record found for this Aadhaar number"));
        return;
      }

      const known = REGISTRY[aadhaarNumber];
      if (known) {
        resolve(known);
        return;
      }

      // Deterministic generic fallback so any 12-digit input still works in a demo.
      const lastDigit = Number(aadhaarNumber[aadhaarNumber.length - 1]) || 0;
      const profile = GENERIC_PROFILES[lastDigit % GENERIC_PROFILES.length];
      resolve({ ...profile, dob: "01/01/1990" });
    }, FETCH_DELAY_MS);
  });
};

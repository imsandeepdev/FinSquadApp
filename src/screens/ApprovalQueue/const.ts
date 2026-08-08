export type ApprovalType = "GRT" | "FI";
export type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface ApprovalCase {
  id: string;
  type: ApprovalType;
  customerName: string;
  customerCode: string;
  village: string;
  submittedBy: string;
  submittedDate: string;
  /**
   * Flat field bag using the exact same keys CustomerOnBoard's GRTApproval /
   * FIApproval components already read (grtApprovalStatus / fiApprovalStatus
   * + their summary fields) — lets this screen reuse those components as-is
   * for the detail + approve/reject view.
   */
  caseData: Record<string, string>;
}

export const PENDING_APPROVALS: ApprovalCase[] = [
  {
    id: "ap1",
    type: "GRT",
    customerName: "Anita Sharma",
    customerCode: "UC_32172",
    village: "Maldah",
    submittedBy: "Field Officer · Sandeep",
    submittedDate: "07 Aug 2026",
    caseData: {
      grtApprovalStatus: "",
      grtGroupName: "Maldah Sakhi Group",
      grtMemberCount: "8",
      grtScore: "82",
      grtResult: "Recommended",
      cfCentreName: "Maldah Sakhi Kendra",
      cfCentreCode: "CTR_1005",
    },
  },
  {
    id: "ap2",
    type: "FI",
    customerName: "Vikram Yadav",
    customerCode: "UC_32171",
    village: "Shahpur",
    submittedBy: "Field Officer · Sandeep",
    submittedDate: "07 Aug 2026",
    caseData: {
      fiApprovalStatus: "",
      hvApplicantName: "Vikram Yadav",
      hvVerifiedBy: "Sandeep (Field Officer)",
      hvHouseType: "Owned - Pucca",
      hvOwnershipProofType: "Electricity Bill",
      hvAddressMatches: "Yes",
      hvGpsCaptured: "Yes",
    },
  },
  {
    id: "ap3",
    type: "GRT",
    customerName: "Pooja Mehta",
    customerCode: "UC_32170",
    village: "Kalyanpur",
    submittedBy: "Field Officer · Ramesh",
    submittedDate: "06 Aug 2026",
    caseData: {
      grtApprovalStatus: "",
      grtGroupName: "Kalyanpur Pragati Group",
      grtMemberCount: "6",
      grtScore: "60",
      grtResult: "Needs Re-training",
      cfCentreName: "Kalyanpur Pragati Kendra",
      cfCentreCode: "CTR_1003",
    },
  },
  {
    id: "ap4",
    type: "FI",
    customerName: "Sanjay Singh",
    customerCode: "UC_32169",
    village: "Bhatauli",
    submittedBy: "Field Officer · Ramesh",
    submittedDate: "06 Aug 2026",
    caseData: {
      fiApprovalStatus: "",
      hvApplicantName: "Sanjay Singh",
      hvVerifiedBy: "Ramesh (Field Officer)",
      hvHouseType: "Rented - Semi-Pucca",
      hvOwnershipProofType: "Rent Agreement",
      hvAddressMatches: "Yes",
      hvGpsCaptured: "Yes",
    },
  },
  {
    id: "ap5",
    type: "GRT",
    customerName: "Deepak Kumar",
    customerCode: "UC_32173",
    village: "Hasanpur",
    submittedBy: "Field Officer · Sandeep",
    submittedDate: "04 Aug 2026",
    caseData: {
      grtApprovalStatus: "Approved",
      grtGroupName: "Shahpur Unnati Group",
      grtMemberCount: "10",
      grtScore: "91",
      grtResult: "Recommended",
      cfCentreName: "Shahpur Unnati Kendra",
      cfCentreCode: "CTR_1004",
    },
  },
  {
    id: "ap6",
    type: "FI",
    customerName: "Rajesh Kumar",
    customerCode: "UC_32168",
    village: "Rampur",
    submittedBy: "Field Officer · Sandeep",
    submittedDate: "03 Aug 2026",
    caseData: {
      fiApprovalStatus: "Rejected",
      hvApplicantName: "Rajesh Kumar",
      hvVerifiedBy: "Sandeep (Field Officer)",
      hvHouseType: "Rented - Kutcha",
      hvOwnershipProofType: "None provided",
      hvAddressMatches: "No",
      hvGpsCaptured: "No",
    },
  },
];

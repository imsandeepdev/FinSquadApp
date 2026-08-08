export const LOAN_APPROVAL_DATA = {
  loanId: "LN2026084471",
  status: "Approved",
  approvedAmount: "₹5,00,000",

  breakdown: [
    { label: "Principal", value: "₹5,00,000" },
    { label: "Processing fee (1%)", value: "-₹5,000" },
    { label: "Insurance premium", value: "-₹3,200" },
    { label: "Net disbursal", value: "₹4,91,800", highlight: true },
  ],

  terms: [
    { label: "Tenure", value: "24 months" },
    { label: "Interest rate", value: "11.5% p.a." },
    { label: "Monthly EMI", value: "₹23,240" },
    { label: "First EMI date", value: "05 Sep 2026" },
  ],

  documents: [
    {
      title: "Sanction letter",
      subtitle: "Downloadable PDF",
      icon: "download-outline",
      actionLabel: "Download",
    },
    {
      title: "Loan agreement",
      subtitle: "Viewable in-app",
      icon: "eye-outline",
      actionLabel: "View",
    },
  ],
};

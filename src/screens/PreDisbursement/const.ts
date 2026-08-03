export const PRE_DISBURSEMENT_DATA = {
  loanId: "LN2026084471",
  setupProgress: 75,

  checklist: [
    {
      title: "KYC verified",
      subtitle: "Aadhaar and PAN matched",
      status: "Done" as const,
    },
    {
      title: "Bank account verified",
      subtitle: "Penny-drop successful",
      status: "Done" as const,
    },
    {
      title: "Loan agreement signed",
      subtitle: "e-Signed on 30 Jul 2026",
      status: "Done" as const,
    },
    {
      title: "e-NACH mandate",
      subtitle: "Pending your approval",
      status: "Pending" as const,
    },
  ],

  account: [
    { label: "Bank", value: "HDFC Bank — Savings" },
    { label: "Account holder", value: "Ramesh Kumar" },
    { label: "Account no.", value: "•••• •••• 4521" },
    { label: "IFSC", value: "HDFC0001234" },
    { label: "Disbursement mode", value: "NEFT" },
    { label: "Expected date", value: "05 Aug 2026" },
  ],
};

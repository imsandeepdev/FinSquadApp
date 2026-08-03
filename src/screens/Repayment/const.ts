export const REPAYMENT_DATA = {
  loanId: "LN2026084471",

  nextEmi: {
    amount: "₹23,240",
    dueDate: "12 Aug 2026",
    installment: "#9 of 24",
  },

  summary: [
    { label: "Loan amount", value: "₹5,00,000" },
    { label: "Paid so far", value: "₹1,85,920" },
    { label: "Outstanding", value: "₹3,72,240" },
  ],

  progressLabel: "8 of 24 EMIs paid (33%)",
  progressPercent: 33,

  schedule: [
    { id: "#7", month: "Jun 2026", amount: "₹23,240", status: "Paid" as const },
    { id: "#8", month: "Jul 2026", amount: "₹23,240", status: "Paid" as const },
    { id: "#9", month: "Aug 2026", amount: "₹23,240", status: "Due" as const },
    { id: "#10", month: "Sep 2026", amount: "₹23,240", status: "Upcoming" as const },
  ],

  paymentMethods: [
    { id: "upi", label: "UPI", icon: "phone-portrait-outline" },
    { id: "card", label: "Debit / Credit card", icon: "card-outline" },
    { id: "netbanking", label: "Net banking", icon: "business-outline" },
  ],
};

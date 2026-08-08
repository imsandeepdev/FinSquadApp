export interface ReportPeriod {
  id: string;
  label: string;
}

export const REPORT_PERIODS: ReportPeriod[] = [
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
  { id: "quarter", label: "This Quarter" },
];

export interface ReportKpi {
  id: string;
  icon: string;
  label: string;
  value: string;
  color: string;
}

export const REPORT_KPIS: ReportKpi[] = [
  { id: "disbursed", icon: "arrow-up-circle-outline", label: "Total Disbursed", value: "₹18.6L", color: "#2563EB" },
  { id: "collected", icon: "arrow-down-circle-outline", label: "Total Collected", value: "₹14.2L", color: "#16A34A" },
  { id: "overdue", icon: "alert-circle-outline", label: "Overdue Amount", value: "₹62,400", color: "#DC2626" },
  { id: "active", icon: "people-outline", label: "Active Loans", value: "96", color: "#7C3AED" },
];

export const COLLECTION_TREND = [
  { label: "Mar", value: 120 },
  { label: "Apr", value: 145 },
  { label: "May", value: 132 },
  { label: "Jun", value: 158 },
  { label: "Jul", value: 170 },
  { label: "Aug", value: 142 },
];

export interface ReportCategory {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export const REPORT_CATEGORIES: ReportCategory[] = [
  {
    id: "portfolio",
    icon: "briefcase-outline",
    title: "Portfolio Report",
    subtitle: "Loan-wise outstanding & status summary",
  },
  {
    id: "collection",
    icon: "cash-outline",
    title: "Collection Report",
    subtitle: "EMI collections by centre & date",
  },
  {
    id: "disbursement",
    icon: "wallet-outline",
    title: "Disbursement Report",
    subtitle: "Loans disbursed this period",
  },
  {
    id: "overdue",
    icon: "warning-outline",
    title: "Overdue / NPA Report",
    subtitle: "Delayed & non-performing accounts",
  },
  {
    id: "centre",
    icon: "business-outline",
    title: "Centre-wise Report",
    subtitle: "Performance breakdown by centre",
  },
  {
    id: "attendance",
    icon: "checkmark-done-outline",
    title: "Attendance Report",
    subtitle: "Centre meeting attendance log",
  },
];

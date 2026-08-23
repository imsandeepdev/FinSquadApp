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

export interface CollectionTrendPoint {
  label: string;
  value: number;
  overdue: number;
}

export interface ReportPeriodData {
  subtitle: string;
  kpis: ReportKpi[];
  collectionTrend: CollectionTrendPoint[];
}

export const REPORT_DATA_BY_PERIOD: Record<string, ReportPeriodData> = {
  week: {
    subtitle: "₹ in Lakhs · Last 7 days",
    kpis: [
      { id: "disbursed", icon: "arrow-up-circle-outline", label: "Total Disbursed", value: "₹4.2L", color: "#2563EB" },
      { id: "collected", icon: "arrow-down-circle-outline", label: "Total Collected", value: "₹3.4L", color: "#16A34A" },
      { id: "overdue", icon: "alert-circle-outline", label: "Overdue Amount", value: "₹8,200", color: "#DC2626" },
      { id: "active", icon: "people-outline", label: "Active Loans", value: "96", color: "#7C3AED" },
    ],
    collectionTrend: [
      { label: "Mon", value: 18, overdue: 2.5 },
      { label: "Tue", value: 22, overdue: 1.8 },
      { label: "Wed", value: 19, overdue: 3.1 },
      { label: "Thu", value: 26, overdue: 1.4 },
      { label: "Fri", value: 31, overdue: 1.1 },
      { label: "Sat", value: 24, overdue: 2.0 },
      { label: "Sun", value: 14, overdue: 2.6 },
    ],
  },

  month: {
    subtitle: "₹ in Lakhs · Last 4 weeks",
    kpis: [
      { id: "disbursed", icon: "arrow-up-circle-outline", label: "Total Disbursed", value: "₹9.4L", color: "#2563EB" },
      { id: "collected", icon: "arrow-down-circle-outline", label: "Total Collected", value: "₹7.6L", color: "#16A34A" },
      { id: "overdue", icon: "alert-circle-outline", label: "Overdue Amount", value: "₹28,500", color: "#DC2626" },
      { id: "active", icon: "people-outline", label: "Active Loans", value: "96", color: "#7C3AED" },
    ],
    collectionTrend: [
      { label: "Week 1", value: 72, overdue: 9 },
      { label: "Week 2", value: 84, overdue: 6 },
      { label: "Week 3", value: 65, overdue: 11 },
      { label: "Week 4", value: 91, overdue: 5 },
    ],
  },

  quarter: {
    subtitle: "₹ in Lakhs · Last 6 months",
    kpis: [
      { id: "disbursed", icon: "arrow-up-circle-outline", label: "Total Disbursed", value: "₹18.6L", color: "#2563EB" },
      { id: "collected", icon: "arrow-down-circle-outline", label: "Total Collected", value: "₹14.2L", color: "#16A34A" },
      { id: "overdue", icon: "alert-circle-outline", label: "Overdue Amount", value: "₹62,400", color: "#DC2626" },
      { id: "active", icon: "people-outline", label: "Active Loans", value: "96", color: "#7C3AED" },
    ],
    collectionTrend: [
      { label: "Mar", value: 120, overdue: 14 },
      { label: "Apr", value: 145, overdue: 11 },
      { label: "May", value: 132, overdue: 16 },
      { label: "Jun", value: 158, overdue: 9 },
      { label: "Jul", value: 170, overdue: 7 },
      { label: "Aug", value: 142, overdue: 12 },
    ],
  },
};

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

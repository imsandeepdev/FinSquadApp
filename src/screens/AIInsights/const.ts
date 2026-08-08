export interface AiKpi {
  id: string;
  icon: string;
  label: string;
  value: string;
  color: string;
}

export const AI_KPIS: AiKpi[] = [
  { id: "par", icon: "alert-circle-outline", label: "Portfolio at Risk", value: "4.2%", color: "#DC2626" },
  { id: "collection", icon: "cash-outline", label: "Collection Efficiency", value: "94.5%", color: "#16A34A" },
  { id: "turnaround", icon: "time-outline", label: "Avg. Approval Turnaround", value: "1.8 days", color: "#2563EB" },
  { id: "alerts", icon: "notifications-outline", label: "Active AI Alerts", value: "6", color: "#F59E0B" },
];

export type ActionPriority = "High" | "Medium";

export interface PriorityAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  priority: ActionPriority;
}

// Static, portfolio-flavoured alerts. One dynamic centre-health alert (built
// from real CentreManagement data) is prepended to this list at render time.
export const PRIORITY_ACTIONS: PriorityAction[] = [
  {
    id: "a1",
    icon: "trending-down-outline",
    title: "5 customers likely to miss EMI this week",
    description: "Repayment risk model flagged these accounts based on recent payment delays.",
    priority: "High",
  },
  {
    id: "a2",
    icon: "document-text-outline",
    title: "3 KYC documents pending re-verification",
    description: "Aadhaar e-KYC address mismatch detected for recent onboardings.",
    priority: "Medium",
  },
  {
    id: "a3",
    icon: "shield-checkmark-outline",
    title: "2 duplicate Aadhaar numbers detected",
    description: "Flagged across recent customer onboarding — review before disbursement.",
    priority: "High",
  },
];

export interface VisitStop {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
}

export const SUGGESTED_VISITS: VisitStop[] = [
  { id: "v1", name: "Rampur Mahila Kendra", subtitle: "Centre meeting + collection", distance: "1.2 km" },
  { id: "v2", name: "Anita Sharma", subtitle: "GRT follow-up", distance: "2.8 km" },
  { id: "v3", name: "Bhatauli Vikas Kendra", subtitle: "Overdue EMI collection", distance: "4.5 km" },
  { id: "v4", name: "Vikram Yadav", subtitle: "Pending KYC re-verification", distance: "6.1 km" },
];

export const SUGGESTED_PROMPTS: string[] = [
  "Centre health",
  "Overdue accounts",
  "KYC status",
  "This week's collection",
];

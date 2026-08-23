export interface PerformanceKpi {
  id: string;
  icon: string;
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
  color: string;
}

export const PERFORMANCE_KPIS: PerformanceKpi[] = [
  { id: "clients", icon: "people-outline", label: "Total Clients", value: "20", trend: "+2 this month", isPositive: true, color: "#2563EB" },
  { id: "portfolio", icon: "wallet-outline", label: "Portfolio Managed", value: "₹12.45 Cr", trend: "+4.2% MoM", isPositive: true, color: "#16A34A" },
  { id: "collection", icon: "trending-up-outline", label: "Collection Efficiency", value: "96.4%", trend: "+1.1% MoM", isPositive: true, color: "#7C3AED" },
  { id: "overdue", icon: "alert-circle-outline", label: "Overdue Rate", value: "1.8%", trend: "-0.4% MoM", isPositive: true, color: "#DC2626" },
];

export interface PerformanceTrendPoint {
  label: string;
  value: number;
}

export const COLLECTION_EFFICIENCY_TREND: PerformanceTrendPoint[] = [
  { label: "Mar", value: 91 },
  { label: "Apr", value: 93 },
  { label: "May", value: 92 },
  { label: "Jun", value: 95 },
  { label: "Jul", value: 94 },
  { label: "Aug", value: 96 },
];

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  earned: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "gold", icon: "trophy", title: "Gold Performer", subtitle: "Top 10% this quarter", color: "#F59E0B", earned: true },
  { id: "zero-overdue", icon: "shield-checkmark", title: "Zero Overdue Streak", subtitle: "3 months running", color: "#16A34A", earned: true },
  { id: "centre-champion", icon: "business", title: "Centre Champion", subtitle: "5 centres managed", color: "#6366F1", earned: true },
  { id: "top-recruiter", icon: "person-add", title: "Top Recruiter", subtitle: "10+ new clients onboarded", color: "#A855F7", earned: false },
];

export const LEVEL_PROGRESS = {
  currentLevel: 4,
  currentLevelLabel: "Pro Advisor",
  nextLevelLabel: "Elite Advisor",
  progressPercent: 68,
  pointsToNext: 320,
};

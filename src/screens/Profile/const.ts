export const AGENT_PROFILE = {
  name: "Riya Nandi",
  role: "Senior Relationship Manager",
  employeeId: "EMP102345",
  branch: "Varanasi Branch",
  region: "Uttar Pradesh",
  mobile: "+91 98765 12340",
  email: "riya.nandi@finsquad.com",
  joinDate: "12 Jan 2022",
  avatarUri: "https://i.pravatar.cc/200",
  tierLabel: "🏆 Gold Performer",
  tierSub: "Top 10%",
  levelLabel: "⚡ Level 4",
  levelSub: "Pro Advisor",
};

export const PROFILE_STATS = [
  { id: "clients", icon: "people-outline", label: "Total Clients", value: "20" },
  { id: "portfolio", icon: "wallet-outline", label: "Portfolio Managed", value: "₹12.45 Cr" },
  { id: "collection", icon: "trending-up-outline", label: "Collection Efficiency", value: "96.4%" },
];

export const WORK_INFO = [
  { label: "Mobile Number", value: AGENT_PROFILE.mobile },
  { label: "Email Address", value: AGENT_PROFILE.email },
  { label: "Branch", value: AGENT_PROFILE.branch },
  { label: "Region", value: AGENT_PROFILE.region },
  { label: "Employee ID", value: AGENT_PROFILE.employeeId },
  { label: "Date of Joining", value: AGENT_PROFILE.joinDate },
];

export interface ProfileMenuItem {
  id: string;
  icon: string;
  label: string;
}

export interface ProfileMenuSection {
  title: string;
  items: ProfileMenuItem[];
}

export const MENU_SECTIONS: ProfileMenuSection[] = [
  {
    title: "Account",
    items: [
      { id: "edit-profile", icon: "person-outline", label: "Edit Profile" },
      { id: "documents-kyc", icon: "document-text-outline", label: "Documents & KYC" },
      { id: "change-password", icon: "lock-closed-outline", label: "Change Password" },
    ],
  },
  {
    title: "Work",
    items: [
      { id: "my-performance", icon: "stats-chart-outline", label: "My Performance" },
      { id: "my-centres", icon: "business-outline", label: "My Centres" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { id: "notifications", icon: "notifications-outline", label: "Notifications" },
      { id: "language", icon: "language-outline", label: "Language" },
    ],
  },
  {
    title: "Support",
    items: [
      { id: "help-support", icon: "help-circle-outline", label: "Help & Support" },
      { id: "terms-privacy", icon: "shield-checkmark-outline", label: "Terms & Privacy" },
    ],
  },
];

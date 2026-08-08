import { TranslationKey } from "../../utils/i18n";

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
  { id: "clients", icon: "people-outline", labelKey: "profile.stats.totalClients" as TranslationKey, value: "20" },
  { id: "portfolio", icon: "wallet-outline", labelKey: "profile.stats.portfolioManaged" as TranslationKey, value: "₹12.45 Cr" },
  { id: "collection", icon: "trending-up-outline", labelKey: "profile.stats.collectionEfficiency" as TranslationKey, value: "96.4%" },
];

export const WORK_INFO = [
  { labelKey: "profile.workInfo.mobile" as TranslationKey, value: AGENT_PROFILE.mobile },
  { labelKey: "profile.workInfo.email" as TranslationKey, value: AGENT_PROFILE.email },
  { labelKey: "profile.workInfo.branch" as TranslationKey, value: AGENT_PROFILE.branch },
  { labelKey: "profile.workInfo.region" as TranslationKey, value: AGENT_PROFILE.region },
  { labelKey: "profile.workInfo.employeeId" as TranslationKey, value: AGENT_PROFILE.employeeId },
  { labelKey: "profile.workInfo.joinDate" as TranslationKey, value: AGENT_PROFILE.joinDate },
];

export interface ProfileMenuItem {
  id: string;
  icon: string;
  labelKey: TranslationKey;
}

export interface ProfileMenuSection {
  titleKey: TranslationKey;
  items: ProfileMenuItem[];
}

export const MENU_SECTIONS: ProfileMenuSection[] = [
  {
    titleKey: "profile.menu.sectionAccount",
    items: [
      { id: "edit-profile", icon: "person-outline", labelKey: "profile.menu.editProfile" },
      { id: "documents-kyc", icon: "document-text-outline", labelKey: "profile.menu.documentsKyc" },
      { id: "change-password", icon: "lock-closed-outline", labelKey: "profile.menu.changePassword" },
    ],
  },
  {
    titleKey: "profile.menu.sectionWork",
    items: [
      { id: "my-performance", icon: "stats-chart-outline", labelKey: "profile.menu.myPerformance" },
      { id: "my-centres", icon: "business-outline", labelKey: "profile.menu.myCentres" },
    ],
  },
  {
    titleKey: "profile.menu.sectionPreferences",
    items: [
      { id: "notifications", icon: "notifications-outline", labelKey: "profile.menu.notifications" },
      { id: "language", icon: "language-outline", labelKey: "profile.menu.language" },
    ],
  },
  {
    titleKey: "profile.menu.sectionSupport",
    items: [
      { id: "help-support", icon: "help-circle-outline", labelKey: "profile.menu.helpSupport" },
      { id: "terms-privacy", icon: "shield-checkmark-outline", labelKey: "profile.menu.termsPrivacy" },
    ],
  },
];

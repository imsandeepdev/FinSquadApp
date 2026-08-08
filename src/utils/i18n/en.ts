/**
 * English (default) strings. Flat, namespaced keys ("screen.section.item")
 * so new locale files just need to mirror this same key set — see
 * ./index.ts for how a new language gets registered.
 */
const en = {
  "common.cancel": "Cancel",
  "common.comingSoon": "This will be available soon.",

  "profile.header": "Profile",
  "profile.contactWork": "Contact & Work Info",
  "profile.logout": "Log Out",
  "profile.logoutConfirmTitle": "Log out?",
  "profile.logoutConfirmMessage": "You will need to sign in again to access your account.",
  "profile.logoutConfirm": "Log out",

  "profile.stats.totalClients": "Total Clients",
  "profile.stats.portfolioManaged": "Portfolio Managed",
  "profile.stats.collectionEfficiency": "Collection Efficiency",

  "profile.workInfo.mobile": "Mobile Number",
  "profile.workInfo.email": "Email Address",
  "profile.workInfo.branch": "Branch",
  "profile.workInfo.region": "Region",
  "profile.workInfo.employeeId": "Employee ID",
  "profile.workInfo.joinDate": "Date of Joining",

  "profile.menu.sectionAccount": "Account",
  "profile.menu.sectionWork": "Work",
  "profile.menu.sectionPreferences": "Preferences",
  "profile.menu.sectionSupport": "Support",

  "profile.menu.editProfile": "Edit Profile",
  "profile.menu.documentsKyc": "Documents & KYC",
  "profile.menu.changePassword": "Change Password",
  "profile.menu.myPerformance": "My Performance",
  "profile.menu.myCentres": "My Centres",
  "profile.menu.notifications": "Notifications",
  "profile.menu.language": "Language",
  "profile.menu.helpSupport": "Help & Support",
  "profile.menu.termsPrivacy": "Terms & Privacy",

  "profile.languageModal.title": "App Language",
  "profile.languageModal.subtitle": "Choose your preferred language for the app.",
  "profile.languageModal.moreComingSoon": "More languages coming soon",
};

export default en;
export type TranslationKey = keyof typeof en;

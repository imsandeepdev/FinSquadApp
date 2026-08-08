import { TranslationKey } from "./en";

/**
 * Hindi strings. Must mirror en.ts's key set — TypeScript (Record<TranslationKey, string>)
 * will error if a key is ever missing here after en.ts gains a new one.
 */
const hi: Record<TranslationKey, string> = {
  "common.cancel": "रद्द करें",
  "common.comingSoon": "यह सुविधा जल्द ही उपलब्ध होगी।",

  "profile.header": "प्रोफ़ाइल",
  "profile.contactWork": "संपर्क व कार्य जानकारी",
  "profile.logout": "लॉग आउट",
  "profile.logoutConfirmTitle": "लॉग आउट करें?",
  "profile.logoutConfirmMessage": "अपने खाते तक पहुँचने के लिए आपको फिर से साइन इन करना होगा।",
  "profile.logoutConfirm": "लॉग आउट",

  "profile.stats.totalClients": "कुल ग्राहक",
  "profile.stats.portfolioManaged": "प्रबंधित पोर्टफोलियो",
  "profile.stats.collectionEfficiency": "संग्रहण दक्षता",

  "profile.workInfo.mobile": "मोबाइल नंबर",
  "profile.workInfo.email": "ईमेल पता",
  "profile.workInfo.branch": "शाखा",
  "profile.workInfo.region": "क्षेत्र",
  "profile.workInfo.employeeId": "कर्मचारी आईडी",
  "profile.workInfo.joinDate": "जुड़ने की तिथि",

  "profile.menu.sectionAccount": "खाता",
  "profile.menu.sectionWork": "कार्य",
  "profile.menu.sectionPreferences": "प्राथमिकताएं",
  "profile.menu.sectionSupport": "सहायता",

  "profile.menu.editProfile": "प्रोफ़ाइल संपादित करें",
  "profile.menu.documentsKyc": "दस्तावेज़ व KYC",
  "profile.menu.changePassword": "पासवर्ड बदलें",
  "profile.menu.myPerformance": "मेरी परफॉरमेंस",
  "profile.menu.myCentres": "मेरे केंद्र",
  "profile.menu.notifications": "सूचनाएं",
  "profile.menu.language": "भाषा",
  "profile.menu.helpSupport": "सहायता व समर्थन",
  "profile.menu.termsPrivacy": "नियम व गोपनीयता",

  "profile.languageModal.title": "ऐप की भाषा",
  "profile.languageModal.subtitle": "ऐप के लिए अपनी पसंदीदा भाषा चुनें।",
  "profile.languageModal.moreComingSoon": "और भाषाएं जल्द आ रही हैं",
};

export default hi;

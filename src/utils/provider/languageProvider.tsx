import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
} from "react";
import {
  LanguageCode,
  TranslationKey,
  translations,
  DEFAULT_LANGUAGE,
} from "../i18n";

interface LanguageContextProps {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  /** Translate a key for the current language, falling back to English,
   * then to the raw key itself if it's missing everywhere. */
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // App always boots in English regardless of device locale — language is
  // an explicit in-app choice (from the Profile screen), not auto-detected.
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = translations[language] || translations[DEFAULT_LANGUAGE];
      return dict[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

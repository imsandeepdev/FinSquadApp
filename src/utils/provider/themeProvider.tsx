import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { DarkTheme } from '../../res/colors/DarkTheme';
import { LightTheme } from '../../res/colors/LightTheme';
import { AppThemeTypes } from '../../res/colors/theme.types';
// import { LightTheme, DarkTheme } from './theme';

interface ThemeContextProps {
  theme: AppThemeTypes;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme: ColorSchemeName = Appearance.getColorScheme() ?? 'light';

  const getInitialTheme = (): AppThemeTypes =>
    systemTheme !== 'dark' ? LightTheme : DarkTheme;

  const [theme, setTheme] = useState<AppThemeTypes>(getInitialTheme);

  // Listen to system theme changes
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setTheme(colorScheme !== 'dark' ? LightTheme : DarkTheme);
      }
    });

    return () => listener.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prev: AppThemeTypes) =>
      prev.mode === 'light' ? DarkTheme : LightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook (safe usage)
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

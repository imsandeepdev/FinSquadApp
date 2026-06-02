import { useTheme } from "../../utils/provider/themeProvider";

export const useThemedStyles = <T>(
  styleFn: (theme: any) => T
): T => {
  const { theme } = useTheme();
  return styleFn(theme);
};

import { ThemeProps, ModeSafeTheme } from 'types';

const DEFAULT_THEME_MODE = 'light';

// Resolves the different types of theme objects in the current API
export default function getTheme(props?: ThemeProps): ModeSafeTheme {
  // If format not supported (or no theme provided), return standard theme
  return { mode: DEFAULT_THEME_MODE, ...props?.theme } as ModeSafeTheme;
}

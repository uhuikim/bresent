const palette = {
  white: '#ffffff',
  black: '#171717',
  main: '#F14FA2',
  darkHeader: '#202020',
  shadow: '#efefef',
  darkShadow: '##1c1e20',
  text1: '#333',
};

type ThemeKey = 'text' | 'background' | 'main' | 'header' | 'shadow';
export type Theme = Record<ThemeKey, string>;

export const lightTheme: Theme = {
  text: palette.text1,
  background: palette.white,
  main: palette.main,
  header: palette.white,
  shadow: palette.shadow,
};

export const darkTheme: Theme = {
  text: palette.white,
  background: palette.black,
  main: palette.main,
  header: palette.darkHeader,
  shadow: palette.darkShadow,
};

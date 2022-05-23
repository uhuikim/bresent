const palette = {
  white: '#ffffff',
  black: '#171717',
  bg: '#f9f9f9',
  main: '#F14FA2',
  darkHeader: '#202020',
  shadow: '#efefef',
  darkShadow: '##1c1e20',
  text1: '#333',
  text2: '#828282',
};

type ThemeKey =
  | 'text'
  | 'background'
  | 'main'
  | 'header'
  | 'shadow'
  | 'white'
  | 'subtext';
export type Theme = Record<ThemeKey, string>;

export const lightTheme: Theme = {
  text: palette.text1,
  subtext: palette.text2,
  background: palette.bg,
  main: palette.main,
  header: palette.white,
  shadow: palette.shadow,
  white: palette.white,
};

export const darkTheme: Theme = {
  text: palette.white,
  subtext: palette.white,
  background: palette.black,
  main: palette.main,
  header: palette.darkHeader,
  shadow: palette.darkShadow,
  white: palette.white,
};

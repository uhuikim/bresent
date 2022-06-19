const palette = {
  white: '#ffffff',
  black: '#171717',
  bg: '#f9f9f9',
  main: '#F14FA2',
  darkHeader: '#202020',
  shadow: '#efefef',
  darkShadow: '#1c1e20',
  text1: '#333',
  text2: '#828282',
  gray1: '#d9d9d9',
};

type ThemeKey =
  | 'text'
  | 'background'
  | 'main'
  | 'header'
  | 'shadow'
  | 'white'
  | 'subtext'
  | 'gray1';
export type Theme = Record<ThemeKey, string>;

export const lightTheme: Theme = {
  text: palette.text1,
  subtext: palette.text2,
  background: palette.bg,
  main: palette.main,
  header: palette.white,
  shadow: palette.shadow,
  white: palette.white,
  gray1: palette.gray1,
};

export const darkTheme: Theme = {
  text: palette.white,
  subtext: palette.white,
  background: palette.black,
  main: palette.main,
  header: palette.darkHeader,
  shadow: palette.darkShadow,
  white: palette.white,
  gray1: palette.gray1,
};

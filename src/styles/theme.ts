const palette = {
  white: '#ffffff',
  black: '#282828',
  main: '#F14FA2',
};

type ThemeKey = 'text' | 'background' | 'main';
export type Theme = Record<ThemeKey, string>;

export const lightTheme: Theme = {
  text: palette.black,
  background: palette.white,
  main: palette.main,
};

export const darkTheme: Theme = {
  text: palette.white,
  background: palette.black,
  main: palette.main,
};

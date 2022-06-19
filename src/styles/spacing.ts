import {
  BreakpointsNum,
  MediaQueries,
  BreakpointsType,
  MediaType,
  SpacingNum,
  Spacing,
  SpacingType,
} from 'type/style';

/**
 * Breakpoints
 */

const breakpoints: BreakpointsNum = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
};

const media: MediaQueries = {} as MediaQueries;
const breakpointKeys = Object.keys(breakpoints);

breakpointKeys.forEach((key) => {
  media[key as BreakpointsType] = `@media (min-width: ${
    breakpoints[key as BreakpointsType]
  }px)`;
});

breakpointKeys.reduce((prevMin, key): number => {
  const min: number = breakpoints[key as BreakpointsType];
  const max: number = min - 1;

  media[`${key}Down` as MediaType] = `@media (max-width: ${max}px)`;

  if (prevMin) {
    media[
      `${key}Only` as MediaType
    ] = `@media (min-width: ${prevMin}px) and (max-width: ${max}px)`;
  }

  return min;
}, 0);

/**
 * Spacing
 */

const spacingNum: SpacingNum = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  h: 36,
  xh: 40,
  xxh: 80,
};
const spacing: Spacing = {} as Spacing;

Object.keys(spacingNum).forEach((key) => {
  spacing[key as SpacingType] = `${spacingNum[key as SpacingType]}px`;
});

export { spacing, media, breakpoints };

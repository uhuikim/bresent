export type BreakpointsType = 'sm' | 'md' | 'lg' | 'xl';
export type MediaType =
  | BreakpointsType
  | 'smDown'
  | 'mdDown'
  | 'lgDown'
  | 'xlDown'
  | 'mdOnly'
  | 'lgOnly'
  | 'xlOnly';
export type BreakpointsNum = Record<BreakpointsType, number>;
export type MediaQueries = Record<MediaType, string>;

export type SpacingType =
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'h'
  | 'xh'
  | 'xxh';
export type SpacingNum = Record<SpacingType, number>;
export type Spacing = Record<SpacingType, string>;

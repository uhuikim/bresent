import { css } from '@emotion/react';
import normalize from './nomalize';
import base from './base';
import typography from './typography';

const globalStyle = css`
  ${normalize},
  ${base}
  ${typography}
`;

export default globalStyle;

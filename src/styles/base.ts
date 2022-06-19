import { css } from '@emotion/react';

const base = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Noto Sans KR, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 0.9rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1 {
    font-family: SingleDay;
    font-size: 40px;
  }
  * {
    box-sizing: border-box;
  }
`;

export default base;

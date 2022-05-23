import type { NextPage } from 'next';
import { css, Theme } from '@emotion/react';
import Header from './Header';
import { ReactNode } from 'react';

const wrap = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1050px;
`;
const contentWrap = (theme: Theme) => css`
  height: 100%;
  width: 1160px;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div css={wrap}>
      <Header />
      <main css={contentWrap}>{children}</main>
    </div>
  );
};

export default Layout;

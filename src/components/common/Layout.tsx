import type { NextPage } from 'next';
import { css, Theme } from '@emotion/react';
import Header from './Header';
import { ReactNode } from 'react';
import { breakpoints } from 'styles/spacing';
import Footer from './Footer';

const wrap = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const contentWrap = (theme: Theme) => css`
  width: 100%;
  max-width: ${breakpoints.xl}px;
  height: 100%;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div css={wrap}>
      <Header />
      <main css={contentWrap}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

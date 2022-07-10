import { css } from '@emotion/react';
import Header from './Header';
import { ReactNode } from 'react';
import { breakpoints } from 'styles/spacing';
import Footer from './Footer';

const wrap = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const contentWrap = () => css`
  width: 100%;
  max-width: ${breakpoints.xl}px;
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

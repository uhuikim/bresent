import React from 'react';
import Image from 'next/image';

import { css, Theme } from '@emotion/react';
import Link from 'next/link';
import { breakpoints, spacing } from 'styles/spacing';

const wrap = (theme: Theme) => css`
  width: 100%;
  background: ${theme.header};
  box-shadow: -1px 2px 2px 0px ${theme.shadow};
`;

const navBar = (theme: Theme) =>
  css`
    max-width: ${breakpoints.xl}px;
    color: ${theme.text};
    display: flex;
    flex-direction: column;
    padding: ${spacing.xl} 0;
    margin: 0 auto;
  `;

const test = () => css`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`;

const firstNav = () => css`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <header css={wrap}>
      <nav css={navBar}>
        <ul css={test}>
          <Link href="/login">
            <a>
              <li>로그인</li>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <li>회원가입</li>
            </a>
          </Link>
        </ul>
        <div css={firstNav}>
          <h1>
            <Link href="/">
              <a>
                <Image src="/logo.png" width={96} height={66} />
              </a>
            </Link>
          </h1>
        </div>
        {/* <ul css={secondNav}>
          {navData.map((el) => (
            <Link href={el.url} key={el.url}>
              <a className={pathname.includes(el.url) ? 'active' : ''}>
                <li>{el.title}</li>
              </a>
            </Link>
          ))}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;

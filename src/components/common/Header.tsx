import React from 'react';
import Image from 'next/image';

import { css, Theme, styled } from '@emotion/react';
import { useTheme } from 'context/ThemeProvider';
import Link from 'next/link';

const wrap = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const topHeader = () => css`
  width: 100%;
  text-align: right;
  padding: 0.5rem;
`;

const logo = () => css``;

const toggleThemeButton = (theme: Theme) => css`
  outline: none;
  border: 0;
  background-color: transparent;
  color: ${theme.text};
  font-size: 12px;
  cursor: pointer;
  &:hover,
  &:active {
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <header css={wrap}>
      <div css={topHeader}>
        <button css={toggleThemeButton} onClick={() => toggleTheme()}>
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
      <h1 css={logo}>
        <Link href="/">
          <a>
            <Image
              src={isDarkTheme ? '/logo_w5.png' : '/logo_b5.png'}
              width={96}
              height={66}
            />
          </a>
        </Link>
      </h1>
      <nav>
        <li>빵선물</li>
        <li>빵종류</li>
        <li>재료</li>
        <li>레시피</li>
        <li>오답노트</li>
        <li>카테고리</li>
      </nav>
    </header>
  );
};

export default Header;

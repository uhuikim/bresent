import React from 'react';
import Image from 'next/image';

import { css, Theme } from '@emotion/react';
import { useTheme } from 'context/ThemeProvider';
import Link from 'next/link';
import { navData } from 'data/data';
import { useRouter } from 'next/router';

const wrap = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.header};
`;
const topHeader = () => css`
  width: 100%;
  text-align: right;
  padding-top: 0.5rem;
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

const navBar = (theme: Theme) =>
  css`
    width: 100%;
    box-shadow: -1px 2px 2px 0px ${theme.shadow};
    color: ${theme.text};
    height: 55px;
    display: flex;
    align-items: center;

    > div {
      width: 1050px;
      display: flex;
      margin: 0 auto;
    }
  `;

const navList = (theme: Theme) => css`
  padding: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${theme.main};
  }
  &.active {
    color: ${theme.main};
  }
`;

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { pathname } = useRouter();

  console.log(pathname);
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
      <nav css={navBar}>
        <div>
          {navData.map((el) => (
            <Link href={el.url}>
              <a>
                <li
                  css={navList}
                  className={pathname === el.url ? 'active' : ''}
                >
                  {el.title}
                </li>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

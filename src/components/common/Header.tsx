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
  padding-top: 1rem;
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
  padding: 1.3rem;
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

  return (
    <header css={wrap}>
      <h1>
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
                  className={pathname.includes(el.url) ? 'active' : ''}
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

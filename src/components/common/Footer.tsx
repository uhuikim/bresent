import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { breakpoints } from 'styles/spacing';
import { Theme } from 'styles/theme';

const wrap = (theme: Theme) => css`
  width: 100%;
  background: ${theme.header};
  border-top: 1px solid ${theme.shadow};
  padding: 2rem 3rem;
  color: ${theme.subtext};
`;

const layout = (theme: Theme) => css`
  display: flex;
  margin: 0 auto;
  max-width: ${breakpoints.xl}px;
`;

const footerLeft = (theme: Theme) => css`
  width: 33.333%;
  margin-top: auto;
`;
const footerRight = (theme: Theme) => css`
  width: 33.333%;
  margin-top: auto;
  text-align: right;
`;

const snsList = (theme: Theme) => css`
  width: 33.333%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const snsItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${theme.gray1};
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const sns = [
  {
    name: 'naver',
    url: 'https://blog.naver.com/bresent_',
    img: 'bg',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/bresent__',
    img: 'in',
  },
  {
    name: 'github',
    url: 'https://github.com/uhuikim/bresent',
    img: 'git',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer css={wrap}>
      <div css={layout}>
        <div css={footerLeft}>
          <p>© {year}. bresent Limited All rights reserved.</p>
        </div>
        <div css={snsList}>
          {sns.map((sns) => (
            <li css={snsItem}>
              <Link passHref href={sns.url}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/assets/icons/icon_sns_${sns.img}.png`}
                    alt={sns.name}
                    width={22}
                    height={22}
                  />
                </a>
              </Link>
            </li>
          ))}
        </div>
        <div css={footerRight}>
          <p>Made By. uhui kim & suhyun kim</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

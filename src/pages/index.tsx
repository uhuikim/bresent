import Head from 'next/head';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { useTheme } from 'context/ThemeProvider';
import Image from 'next/image';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BodyBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: -1;
  transition: background-color 0.2s ease-in-out;
`;

const logo = (theme: Theme) =>
  css`
    display: flex;
    align-items: center;
    color: ${theme.main};
    font-size: 2rem;
    & > p {
      margin-left: 0.5rem;
    }
  `;

const ToggleThemeButton = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
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

const IndexPage: NextPage = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div css={pageContainer}>
      <Head>
        <title>bresent</title>
        <meta name="description" content="bresent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyBlock />
      <h1 css={logo}>
        <Image src="/logo.png" width={40} height={40} />
        <p>bresent</p>
      </h1>

      <ToggleThemeButton onClick={() => toggleTheme()}>
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </ToggleThemeButton>
    </div>
  );
};

export default IndexPage;

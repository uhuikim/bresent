import Head from 'next/head';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { useTheme } from 'context/ThemeProvider';

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

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
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
      <Title>bresent</Title>
      <ToggleThemeButton onClick={() => toggleTheme()}>
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </ToggleThemeButton>
    </div>
  );
};

export default IndexPage;

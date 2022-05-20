import Head from 'next/head';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { breadData } from 'data/data';
import CardCir from 'components/CardCir';
import SubTitle from 'components/SubTitle';

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
    padding: 1rem;
    & > p {
      margin-left: 0.5rem;
    }
  `;

const dicWrap = () => css`
  display: flex;
  flex-wrap: wrap;
`;

const IndexPage: NextPage = () => {
  return (
    <div css={pageContainer}>
      <Head>
        <title>bresent</title>
        <meta name="description" content="bresent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyBlock />
      <SubTitle title="세상의 모든 빵" />
      <div css={dicWrap}>
        {breadData.map((el) => (
          <CardCir data={el} key={el.title} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

import Head from 'next/head';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { ingredient } from 'data/data';
import IngredientCard from './components/IngredientCard';

const pageContainer = css`
  display: flex;
  flex-direction: column;
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

const country = (theme: Theme) =>
  css`
    font-size: 1.8rem;
    font-weight: bold;
  `;

const wrappedCard = () => css`
  display: flex;
  gap: 40px;
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
      <div>
        <h3 css={country}>프랑스</h3>
        <div css={wrappedCard}>
          {ingredient.france.map((el) => (
            <IngredientCard key={el.manufacturer} el={el} />
          ))}
        </div>
      </div>
      <div>
        <h3 css={country}>한국</h3>
        {ingredient.korea.map((el) => (
          <IngredientCard key={el.manufacturer} el={el} />
        ))}
      </div>

      <div>
        <h3 css={country}>뉴질랜드</h3>
        {ingredient.newzealand.map((el) => (
          <IngredientCard key={el.manufacturer} el={el} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

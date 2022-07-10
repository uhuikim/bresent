import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import SubTitle from 'components/SubTitle';
import CardSlider from 'components/CardSlider';
import { breadData } from 'data/data';
import Card from 'components/Crad';

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

const dicWrap = () => css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const cardWrap = () => css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const IndexPage: NextPage = () => {
  return (
    <div css={pageContainer}>
      <BodyBlock />
      <SubTitle title="세상의 모든 빵" link="/dictionary" />
      <div css={cardWrap}>
        {breadData.map((el) => (
          <Card data={el} key={el.title} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

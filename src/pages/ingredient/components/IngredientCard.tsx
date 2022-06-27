import { css, Theme } from '@emotion/react';
import React from 'react';
import Image from 'next/image';

type Props = {
  el: {
    image: string;
    manufacturer: string;
    bland: string;
    category: string;
    title: string;
  };
};

const cardWrap = (theme: Theme) =>
  css`
    position: relative;
    width: 200px;

    > p:nth-of-type(1) {
      font-weight: bold;
      margin-top: 8px;
      font-size: 1.1rem;
    }
  `;

const label = (theme: Theme) =>
  css`
    display: flex;
    position: absolute;
    width: 45px;
    height: 45px;
    top: 0px;
    right: 0px;
    background: ${theme.main};
    color: ${theme.white};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  `;

const topInfo = (theme: Theme) =>
  css`
    display: flex;
    justify-content: space-between;
    color: ${theme.subtext};
    margin-top: 8px;
  `;

const IngredientCard = ({ el }: Props) => {
  return (
    <div css={cardWrap}>
      <Image src={el.image || ''} alt="" width={200} height={200} />
      <div css={topInfo}>
        <p>제조사 | {el.manufacturer}</p>
        <p>브랜드 | {el.bland}</p>
      </div>
      <div css={label}>{el.category}</div>
      <p>{el.title}</p>
    </div>
  );
};

export default IngredientCard;

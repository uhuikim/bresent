import { css, Theme } from '@emotion/react';
import { countryMap } from 'data/data';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: {
    title: string;
    imgUrl: string;
    country: string;
    category: string;
    ingredient: Array<string>;
  };
};

const wrap = (theme: Theme) =>
  css`
    box-shadow: 2px 2px 1px ${theme.shadow};
    position: relative;
    background: ${theme.white};
    > img {
      width: 230px;
    }
    overflow: hidden;
    border-radius: 10px;
  `;

const imageArea = () => css`
  padding: 0 1.5rem;
`;
const desArea = (theme: Theme) => css`
  padding: 0.8rem 1.5rem;

  > p:nth-of-type(1) {
    color: ${theme.subtext};
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
  }
  > p:nth-of-type(2) {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const flag = (theme: Theme) => css`
  display: flex;
  justyfy-content: start;
  color: ${theme.subtext};
  > span {
    margin-left: 0.7rem;
  }
`;

const ingredientArea = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(4, 3rem);
  border-top: 1px solid ${theme.shadow};
  justify-content: center;
  padding: 0.3rem;
`;

const Card = ({ data }: Props) => {
  return (
    <div css={wrap}>
      <div css={imageArea}>
        <Image
          src={`/bread/${data.title}.png`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div css={desArea}>
        <p>{data.category}</p>
        <p>{data.title}</p>
        <div css={flag}>
          <ReactCountryFlag
            countryCode={`${data.country}`}
            svg
            style={{
              width: '20px',
            }}
            title={`${data.country}`}
          />
          <span>{countryMap[data.country]}</span>
        </div>
      </div>
      <ul css={ingredientArea}>
        {data.ingredient.map((el) => (
          <li>
            <Image src={`/ingredient/${el}.png`} width="35" height="35" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

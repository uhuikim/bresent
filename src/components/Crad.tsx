import { css, Theme } from '@emotion/react';
import { countryMap } from 'data/data';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: {
    title: string;
    imgUrl: string;
    country: string;
  };
};

const wrap = (theme: Theme) =>
  css`
    width: 16rem;
    box-shadow: 2px 2px 1px ${theme.shadow};
    position: relative;
    padding: 1.5rem;
    margin: 1rem;
    background: ${theme.white};
    > img {
      width: 230px;
    }
    overflow: hidden;
  `;

const imageArea = () => css``;
const desArea = (theme: Theme) => css`
  > p:nth-of-type(1) {
    color: ${theme.subtext};
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
  }
  > p:nth-of-type(2) {
    font-weight: bold;
    margin-bottom: 0.6rem;
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
        <p>빵</p>
        <p>{data.title}</p>
        <div css={flag}>
          <Image
            src={`/flag/${data.country}.png`}
            width="20"
            height="20"
            objectFit="contain"
          />
          <span>{countryMap[data.country]}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

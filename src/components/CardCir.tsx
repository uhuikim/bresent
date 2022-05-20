import { css, Theme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: {
    title: string;
    imgUrl: string;
    country: string;
  };
};

const wrap = (title: string) => (theme: Theme) =>
  css`
    width: 12rem;
    height: 12rem;
    background: linear-gradient(to top, #e8bab2, #dc9289);
    box-shadow: 2px 2px 1px ${theme.shadow};
    border-radius: 50%;
    position: relative;

    > img {
      width: 230px;
    }
  `;

const flag = () => css`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
`;

const cardTitle = () => css`
  text-align: center;
  font-size: 1.2rem;
  padding: 1.2rem;
`;
const CardCir = ({ data }: Props) => {
  return (
    <div>
      <div css={wrap(data.title)}>
        {/* <img src={`/bread/${data.title}.png`} alt="빵" /> */}
        <Image
          src={`/bread/${data.title}.png`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <div css={flag}></div>
        {/* <div css={flag}>
          <Image
            src={`/flag/${data.country}.png`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div> */}
      </div>
      <p css={cardTitle}>{data.title}</p>
    </div>
  );
};

export default CardCir;

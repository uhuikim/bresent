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
    background: red;
    background: url('/bread/${title}.jpeg');
    background-size: contain;
    box-shadow: 2px 2px 1px ${theme.shadow};
    border-radius: 1rem;
    position: relative;
  `;

const flag = () => css`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
`;
const CardCir = ({ data }: Props) => {
  return (
    <div css={wrap(data.title)}>
      <div css={flag}>
        <Image
          src={`/flag/${data.country}.png`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default CardCir;

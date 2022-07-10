import { css, Theme } from '@emotion/react';
import { countryMap } from 'data/data';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { breadCardType } from 'type';

type Props = {
  data: breadCardType;
};

const wrap = (theme: Theme) =>
  css`
    min-width: 216px;
    box-shadow: 2px 2px 1px ${theme.shadow};
    position: relative;
    background: ${theme.white};
    border-radius: 10px;
  `;

const imageArea = () => css`
  padding: 0.5rem 1.5rem;
  &:hover {
    transform: scale(1.05);
  }
`;
const desArea = (theme: Theme) => css`
  padding: 0rem 1.5rem 1rem 1.5rem;

  > p:nth-of-type(1) {
    color: ${theme.subtext};
    margin-bottom: 0.5rem;
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

const Card = ({ data }: Props) => {
  return (
    <Link href={`/`}>
      <a>
        <div css={wrap}>
          <div css={imageArea}>
            <Image
              src={`/bread/${data.imgUrl}.png`}
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
              {data.country && (
                <ReactCountryFlag
                  countryCode={`${data.country}`}
                  svg
                  style={{
                    width: '20px',
                  }}
                  title={`${data.country}`}
                />
              )}

              <span>{countryMap[data.country] || '-'}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

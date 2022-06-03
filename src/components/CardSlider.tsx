import { css } from '@emotion/react';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { breadData } from 'data/data';
import Card from './Crad';
import { Theme } from 'styles/theme';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,

  // responsive: [
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       variableWidth: true,
  //       centerMode: true,
  //     },
  //   },
  // ],
};
const container = (theme: Theme) =>
  css`
    max-width: 100vw;
    min-width: 360px;
    width: 100%;

    .slick-arrow {
      position: absolute;
      width: 48px;
      height: 48px;
      background: ${theme.white};
      border-radius: 50%;
      box-shadow: 0px 4px 8px rgb(0 0 0 / 15%);
      z-index: 1;
      font-weight: bold;

      @media (max-width: 480px) {
        display: none !important;
      }
    }

    .slick-prev {
      left: 0;
      &:before {
        color: ${theme.text};
        content: '<';
      }
    }

    .slick-next {
      right: 0;
      &:before {
        color: ${theme.text};
        content: '>';
      }
    }
  `;

const CardSlider = () => {
  return (
    <div css={container}>
      <Slider {...settings}>
        {breadData.map((el) => (
          <Card data={el} key={el.title} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;

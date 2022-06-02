import { css } from '@emotion/react';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { breadData } from 'data/data';
import Card from './Crad';
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const container = () =>
  css`
    max-width: 1050px;
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

import { css, Theme } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  link: string;
};

const titleStyle = (theme: Theme) => css`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem;
  color: ${theme.text};
  position: relative;
  width: 100%;
  text-align: center;
`;

const SubTitle = ({ title, link }: Props) => {
  return (
    <div css={titleStyle}>
      <Link href={link}>
        <a>{title} </a>
      </Link>
    </div>
  );
};

export default SubTitle;

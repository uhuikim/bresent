import { css, Theme } from '@emotion/react';
import React from 'react';

type Props = {
  title: string;
};

const titleStyle = (theme: Theme) => css`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  color: ${theme.text};
`;
const SubTitle = ({ title }: Props) => {
  return <div css={titleStyle}>{title}</div>;
};

export default SubTitle;

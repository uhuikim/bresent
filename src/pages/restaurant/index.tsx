import Head from 'next/head';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { restaurantData } from 'data/data';
import Link from 'next/link';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BodyBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: -1;
  transition: background-color 0.2s ease-in-out;
`;

const wrap = (theme: Theme) => css`
  width: 100%;
  background: ${theme.white};
  box-shadow: 1px 1px 1px ${theme.shadow};
`;

const tableHead = (theme: Theme) => css`
  padding: 1.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  background: ${theme.gray1};
`;

const tableBody = () => css`
  text-align: center;
  padding: 1rem;
`;
const TABLE_HEAD = ['No', '가게명', ' 인기 빵', '위치', '인스타그램', '클래스'];

const IndexPage: NextPage = () => {
  return (
    <div css={pageContainer}>
      <Head>
        <title>bresent</title>
        <meta name="description" content="bresent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyBlock />
      <table css={wrap}>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} css={tableHead}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {restaurantData.map((content) => (
            <tr key={content.No}>
              <td css={tableBody}>{content.No}</td>
              <td css={tableBody}>{content.name}</td>
              <td css={tableBody}>{content.popular}</td>
              <td css={tableBody}>{content.location}</td>
              <td css={tableBody}>
                <Link href={content.instagram}>
                  <a target="_blank" rel="noopener noreferrer">
                    {content.instagram}
                  </a>
                </Link>
              </td>
              <td css={tableBody}>
                <Link href={content.class}>
                  <a target="_blank" rel="noopener noreferrer">
                    {content.class}
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexPage;

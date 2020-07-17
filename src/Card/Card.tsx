import React from 'react';
import styled, { css } from 'styled-components/macro';
import { DataProps } from '../types';

type Props = {
  details: DataProps;
};

const CardStyle = styled.div<{ colorVar: string }>`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 12px;
  margin: 12px;
  border-radius: 12px;
  color: white;
  background-color: ${({ colorVar }) => colorVar};
`;

const variableStyling = css`
  font-size: 16px;
  margin: 8px;
  text-transform: uppercase;
`;

const information = css`
  text-align: left;
  font-size: 12px;
  list-style-type: none;
`;

const bold = css`
  font-weight: bold;
`;

export const Card = ({ details }: Props) => {
  const { variables, ...info } = details;
  const color = variables[0];
  const colorVar =
    color === 'Green' ? 'rgb(60,179,.1)' : 'rgba(44, 130, 201, 1)';
  const cta = variables[1];

  return (
    <CardStyle colorVar={colorVar}>
      <div css={variableStyling}>
        <div>{color}</div>
        <div>{cta}</div>
      </div>
      <ol css={information}>
        {Object.keys(info).map((key) => {
          return (
            <li key={key}>
              <span css={bold}>{`${key}: `}</span>
              {info[key]}
            </li>
          );
        })}
      </ol>
    </CardStyle>
  );
};

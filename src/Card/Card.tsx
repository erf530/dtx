

import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { DataProps } from '../types'

type Props = {
  details: DataProps
}

const CardStyle = styled.div<{ colorVar: string }>`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 16px;
  background-color: ${({ colorVar }) => colorVar};
  border-radius: 12px;
  color: white;
  cursor: pointer;
  margin: 12px;
`

const variables = css`
  font-size: 12px;
  margin: 8px;
  border: 1px solid black;
  font-weight: 600;
  text-transform: uppercase;
`
const information = css`
  text-align: left;
  font-size: 10px;
  list-style-type: none;
`
const bold = css`
  font-weight: bold;
`


export const Card = ({ details }: Props) => {
  const { variables, ...info } = details
  const color = variables[0]
  const colorVar = color === 'Green' ? 'rgb(60,179,.1)' : 'rgba(44, 130, 201, 1)';
  const cta = variables[1];

  return (
    <CardStyle colorVar={colorVar}>
      <div css={variables}>
        <div>{color}</div>
        <div>{cta}</div>
      </div>
      <ol css={information}>
        {
          Object.keys(info).map(key => {
            return (
              <li key={key}>
                <span css={bold}>{`${key}: `}</span>
                {info[key]}
              </li>
            )
          })
        }
      </ol>
    </CardStyle>
  )
}

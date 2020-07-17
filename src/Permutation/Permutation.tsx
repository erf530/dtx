

import React, { useEffect, useState } from 'react';
import { DataProps } from '../types'
import styled, { css } from 'styled-components/macro';

type Props = {
  details: DataProps,
  selectPermutation: (details: DataProps) => void,
};


const PermutationItem = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 16px;
  padding: 16px;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;
`

const productBrandName = css`
  padding: 8px;
  font-weight: 900;
  font-size: 19px;
  text-transform: uppercase;
`


export const Permutation = ({ details, selectPermutation }: Props) => {
  const { variables, brand } = details
  const color = variables[0];
  const cta = variables[1];
  console.log(details)
  //brand: ["rhone"]
  // campaign: "a979647f-c344-4c7d-9ddf-3f22ad10008b"
  // id: "0056775b-707e-4fd8-9ac6-5be46028d72d"
  // last_modified: "2019-10-29T03:45:24.391328Z"
  // name: "2019_10_rhone_poster_color-Green_cta-Point. Aim. Shoot"
  // time_stamp: "2019-10-29T03:45:24.391362Z"
  // variables: (2) ["Green", "Point. Aim. Shoot"]

  return (
    <PermutationItem color={color} onClick={() => selectPermutation(details)}>
      <div css={productBrandName}>{brand}</div>
      <div>{color}</div>
      <div>{cta}</div>
      {
        Object.keys(details).map((key) => {
          return (
            <div>{details[key]}</div>
          )
        })}

    </PermutationItem>
  )

}

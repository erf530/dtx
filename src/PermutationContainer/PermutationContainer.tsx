import React, { Fragment } from 'react';
import { DataProps } from '../types';
import { SelectCard } from '../Card/SelectCard';
import { Card } from '../Card/Card';
import styled, { css } from 'styled-components/macro';

type Props = {
  toggleSelected?: (id: string) => void,
  options: DataProps[],
  isViewPage?: boolean,
};


const styledContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;

`

export const PermutationContainer = ({ options, toggleSelected, isViewPage }: Props) => {

  return (
    <div css={styledContainer}>
      {options.map(option => {
        return (
          <Fragment>
            {!isViewPage && !!toggleSelected && (
              <SelectCard
                toggleSelected={toggleSelected}
                key={option.id}
                details={option}
              />

            )}
            {isViewPage && (
              <Card
                key={option.id}
                details={option}
              />

            )}
          </Fragment>)
      })}

    </div>
  )

}

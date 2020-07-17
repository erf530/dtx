import React from 'react';
import { DataProps } from '../types';
import { Card } from './Card';
import styled, { css } from 'styled-components/macro';
import check from '../assets/check.png';

type Props = {
  toggleSelected: (id: string) => void;
  details: DataProps;
  key: string;
};

const SelectItem = styled.div<{ isSelected: boolean | undefined }>`
  display: flex;
  position: relative;
  border-radius: 12px;
  opacity: ${({ isSelected }) => (isSelected ? `1` : `0.7`)};
  &:hover {
    opacity: 1;
  }
  transition: opacity ease-in-out 0.25s;
  cursor: pointer;
`;

const checkPosition = css`
  position: absolute;
  display: flex;
  filter: invert(1);
  margin-left: 12px;
  margin-top: 12px;
`;

export const SelectCard = ({ details, toggleSelected }: Props) => {
  const { selected } = details;
  return (
    <SelectItem
      isSelected={selected}
      onClick={() => toggleSelected(details.id)}
    >
      <Card details={details} />
      {selected && <img alt="check" css={checkPosition} src={check} />}
    </SelectItem>
  );
};

import React, { useEffect, useState } from 'react';
import { DataProps } from '../types';
import { Permutation } from '../Permutation/Permutation';

type Props = {
  options: DataProps[],
  selectPermutation: (details: DataProps) => void,
};

export const PermutationList = ({ options, selectPermutation }: Props) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Permutation selectPermutation={selectPermutation} key={option.id} details={option} />
        )
      })
      }
    </div>
  )

}

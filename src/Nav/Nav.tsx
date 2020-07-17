import React from 'react';
import { css } from 'styled-components/macro';
import flowlogo from '../assets/flowlogo.svg';

const styledNav = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  background-color: black;
`;

const Navigation = () => {
  return (
    <nav css={styledNav}>
      <img src={flowlogo} alt="flowcode-logo" />
    </nav>
  );
};

export { Navigation };

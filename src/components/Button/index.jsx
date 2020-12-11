import React from 'react';

import { StyledButton } from './StyledButton';

export const Button = (props) => {
  const { text, onClick, color, center, id} = props;
  return (
    <>
      <StyledButton id={id} center={center} color={color} onClick={onClick}>{text}</StyledButton>
    </>
  )
};
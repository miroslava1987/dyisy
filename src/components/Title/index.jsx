import React from "react";

import { MainSubtitle, MainTitle, TextClaim } from "./StyledTitle";

export const Title = (props) => {
  const { textTitle, textSubtitle, textClaim } = props;
  return (
    <>
      <MainTitle>{textTitle}</MainTitle>
      <MainSubtitle>{textSubtitle}</MainSubtitle>
      <TextClaim>{textClaim}</TextClaim>
    </>
  );
};

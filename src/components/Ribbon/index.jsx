import React from "react";

import { RibbonAfter, RibbonContainer, RibbonContent } from "./StyledRibbon";

export const Ribbon = (props) => {
  const { text } = props;
  return (
    <RibbonContainer>
      <RibbonContent>{text}</RibbonContent>
      <RibbonAfter />
    </RibbonContainer>
  );
};
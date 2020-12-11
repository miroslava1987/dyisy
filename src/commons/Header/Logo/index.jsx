import React from "react";

import { StyledLink } from "../../../components/ProductItem/StyledProductItem";
import { ContainerLogo, Image } from "./StyledLogo";

export const Logo = () => {
  return (
    <ContainerLogo>
      <StyledLink to={`/`}>
        <Image src="./img/playTosh_logo.png" alt="our_logo" />
      </StyledLink>
    </ContainerLogo>
  );
};

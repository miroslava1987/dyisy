import React from "react";

import { ProductContainer } from "../../components/ProductMenu/StyledProductMenu";
import { Title } from "../../components/Title";
import { ContainerPage } from "./StyledPlayPage";


export const PlayPage = () => {
  const text = "Hello my diar friend! Unfortunately I shouldn't save info about user ip, date time, button id in click.lock file. All information about this action I brought out in CONSOLE."
  return (
    <ProductContainer>
      <ContainerPage>
        <Title
          textTitle={text} />
      </ContainerPage>
    </ProductContainer>
  );
};


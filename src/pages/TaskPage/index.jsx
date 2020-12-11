import React from "react";
import { useSelector } from "react-redux";

import { ProductItem } from "../../components/ProductItem";
import { ProductMenu } from "../../components/ProductMenu";
import { Title } from "../../components/Title";
import { selectProducts } from "../../store/products/selectors";
import { ContentContainer } from "../../styles/GeneralStyledComponents";


export const TaskPage = () => {
  const allProducts = useSelector(selectProducts);
  const product = allProducts.map((item, index) => (
    <ProductItem key={index} product={item} />
  ));

  const titleText = "TOP 5 Real Money Online Casino Bonus List!";
  const subtitleText = "Play online slots for real money trusted online casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!";
  const claimText = "10,302 claimed bonuces and counting!";
  
  return (
    <ContentContainer>
      <Title
        textTitle={titleText}
        textSubtitle={subtitleText}
        textClaim={claimText}
      />
      <ProductMenu />
      {product}
    </ContentContainer>
  );
};

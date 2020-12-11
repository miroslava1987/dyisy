import React from "react";

import { Button } from "../Button";
import { ProductContainer } from "../ProductMenu/StyledProductMenu";
import { Star } from "../Star";
import {
  Image,
  ImageContainer,
  ProductContent,
  BonusesContainer,
  Description,
  Price,
  FreeSpins,
  UserRatingContainer,
  RatingContainer,
  StyledLink,
  ImageWrapp,
  TitleName,
  RowContent
} from "./StyledProductItem";
import { getDateTime } from "../../utils/getDateTime";
import { getUserIp } from "../../utils/getUserIp";
import { Ribbon } from "../Ribbon";
import useWindowDimensions from "../../utils/useWindowDimensions";

export const ProductItem = (props) => {
  const { product } = props;
  const {
    userRating,
    rating,
    img,
    name,
    bonuses,
    id,
    isFavorite,
    isExclusive,
    isFirstNumber,
    isTrending,
  } = product;

  const btnHandler = (id) => {
    getUserIp();
    getDateTime();
    console.log(`button id - ${id}`);
  };
  const { screenWidth } = useWindowDimensions();

  return (
    <ProductContainer>
      <ProductContent>
        {isFavorite && <Ribbon text={"player favorite"} />}
        {isTrending && <Ribbon text={"trending"} />}
        {isFirstNumber && <Ribbon text={"number 1 in europe"} />}
        {isExclusive && <Ribbon text={"exclusive"} />}
        {screenWidth < 1200 ? (
          <ImageWrapp>
            <ImageContainer>
              <Image src={img} alt={name} />
            </ImageContainer>
          </ImageWrapp>
        ) : (
          <ImageContainer>
            <Image src={img} alt={name} />
          </ImageContainer>
        )}

        <BonusesContainer>
          <TitleName>{name}</TitleName>
          {screenWidth < 1200 ? (
            <RowContent>
              {/* {" "} */}
              <Description>{bonuses.up}% Up to</Description>&nbsp;{'+'}&nbsp;
              <Price>&#8364;{bonuses.price}</Price>
            </RowContent>
          ) : (
            <>
              <Description>{bonuses.up}% Up to</Description>
              <Price>&#8364;{bonuses.price.toLocaleString()}</Price>
            </>
          )}
          {bonuses.zeeSpins && (
            <Description>+{bonuses.zeeSpins} Zee Spins</Description>
          )}
          {bonuses.zeePoints && (
            <Description>+{bonuses.zeePoints} Zee Points</Description>
          )}
          {bonuses.freeSpins && (
            <FreeSpins>+{bonuses.freeSpins} Free Spins</FreeSpins>
          )}
        </BonusesContainer>
        {screenWidth >= 1200 ? (
          <UserRatingContainer>
            <Description>
              Rating{"("}
              {userRating}
              {")"}
            </Description>
            <Description>
              <Star />
            </Description>
          </UserRatingContainer>
        ) : (
          <UserRatingContainer>
            <Description>
              <Star />
              <StyledLink to={`/play`}>
                <Button
                  id={id}
                  text={"Play"}
                  color="true"
                  onClick={() => btnHandler(id)}
                />
              </StyledLink>
            </Description>
          </UserRatingContainer>
        )}

        <RatingContainer>{rating}</RatingContainer>

        <RatingContainer>
          <StyledLink to={`/play`}>
            <Button
              id={id}
              text={"Play"}
              color="true"
              onClick={() => btnHandler(id)}
            />
          </StyledLink>
        </RatingContainer>
      </ProductContent>
    </ProductContainer>
  );
};

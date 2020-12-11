import React from "react";
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import { StarContainer, StarContent, StarItem } from "./StyledStar";
import { createArray } from "../../utils/createArray";

export const Star = () => {
  const starIcon = (<StarContent icon={faStar} />);
  const starHalfIcon = (<StarContent icon={faStarHalfAlt} />);

  const allStar = createArray(starIcon, starHalfIcon);
  const star = allStar.map((item, index) => <StarItem key={index}>{item}</StarItem>)
 
  return (
  <StarContainer >
    {star}
  </StarContainer>
  )
};
import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const RibbonContainer = styled.div`
position: absolute;
top: -3.5rem;
right: -1rem;
  @media ${device.desktop}{
    width: max-content;
    top: -4.6rem;
    left: 5.1rem;
  };
`;

export const RibbonContent = styled.h2`
padding: 0.3rem 4rem;
position: relative;
font-size: .8rem;
font-weight: 900;
margin: 3.5rem 1rem 1rem -7.1rem;
color: #000000;
background-color: #00dd00;
text-transform: uppercase;
border-top-right-radius: .9rem;
  @media ${device.desktop}{
    padding: 0.3rem 3rem;
    font-size: 1.3rem;
      &::after {
        content: " ";
        position: absolute;
        left: 0px;
        top: 100%;
        border-width: 0.5rem 1rem;
        border-style: solid;
        border-color: #bf6300 #bf6300 transparent transparent;
      };
      &::before {
        content: "";
        position: absolute;
        right: -0.1rem;
        top: 0;
        height: 2rem;
        width: 2rem;
        background: inherit;
        transform: skewX(-45deg);
      };
  };
`;

export const RibbonAfter = styled.span`
@media ${device.desktop}{
  &::after {
      content: "";
      position: absolute;
      right: .8rem;
      top: 3.9rem;
      height: 2rem;
      width: 1.5rem;
      background: #00dd00;
      transform: skewX(45deg);
    }
}
`;

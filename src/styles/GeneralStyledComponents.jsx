import styled from "styled-components";

import { device } from "./breakpoints";

export const ContentContainer = styled.div`
padding: 0 1.6rem 1rem;
margin: 0 auto;
  @media ${device.desktop} {
    padding: 4rem 0;
    width: 120rem;
  }
`;

export const BackgroundContainer = styled.div`
background-image: url('./img/background4.jpg');
background-repeat: no-repeat;
background-size: cover;
`;

export const BackgroundOverlay = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
`;
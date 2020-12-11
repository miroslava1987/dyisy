import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const MainTitle = styled.h2`
font-size: 1.8rem;
margin: 2rem 0;
text-align: start;
color: #ffffff;
line-height: 3.5rem;
  @media ${device.desktop}{
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
  };
`;

export const MainSubtitle = styled.h5`
display: none;
  @media ${device.desktop}{
    display: block;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
  };
`;

export const TextClaim = styled.h4`
display: none;
  @media ${device.desktop}{
    display: block;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    text-transform: capitalize;
    font-size: 2rem;
    margin: 1rem 0;
  };
`;
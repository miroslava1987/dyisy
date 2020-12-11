import styled from 'styled-components';

import {device} from '../../styles/breakpoints';

export const ProductContainer = styled.div`
max-width: 80rem;
margin: 0 auto;
text-align: center;
`;

export const Menu = styled.div`
background-color: #1D1D1D;
border-radius: 1rem;
  @media ${device.mobile}{
    display: none;
  };
  @media ${device.desktop}{
    display: grid;
    grid-template-columns: 20% 22% 20% 15% 20%;  
    margin-bottom: .5rem;
  }
  p {
    font-size: 1.5em;
    margin: 0;
    padding: 1rem;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
  };
`;


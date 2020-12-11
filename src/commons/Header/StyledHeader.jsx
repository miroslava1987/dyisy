import styled from 'styled-components';

import {device} from '../../styles/breakpoints';

export const HeaderContainer = styled.div`
position: relative;
padding: 3rem; 
background-color: #000000;
  @media ${device.desktop}{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
    width: 120rem;
    margin: 0 auto;
    background-color: initial;
  };
`;
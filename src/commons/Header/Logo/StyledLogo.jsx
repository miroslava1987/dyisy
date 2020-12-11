import styled from 'styled-components';

import {device} from '../../../styles/breakpoints';

export const ContainerLogo = styled.div`
width: 12rem;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: absolute;
top: 50%;
left: 9rem;
transform: translate(-50%, -50%);
  @media ${device.desktop}{
    width: 20rem;
    left: 50%;
}
`;

export const Image = styled.img`
  width: 100%;
`;
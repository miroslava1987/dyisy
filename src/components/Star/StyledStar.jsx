import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../styles/breakpoints';

export const StarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem;
  @media ${device.desktop}{
    margin: .5rem 0 0;
}
`;

export const StarItem = styled.span`
padding-left: .3rem;
  &:first-child {
    padding-left: 0;
}
`;

export const StarContent = styled(FontAwesomeIcon)`
color: #F4CB00;
font-size: 1.3rem;
padding-left: 0;
@media ${device.desktop}{
  font-size: 1.5rem;
  padding-left: .3rem;
  &:first-child {
    padding-left: 0;
}
}


`;
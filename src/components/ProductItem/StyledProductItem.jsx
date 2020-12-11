import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { device } from '../../styles/breakpoints';

export const ProductContent = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
background-color: #ffffff;
border-radius: 1rem;
margin-bottom: 3rem;
height: 10rem;
position: relative;
  @media ${device.desktop}{
    display: grid;
    grid-template-columns: 20% 22% 20% 15% 20%;
    position: relative;
    height: 12rem;
    margin-bottom: 1.5rem;

 }
`;

export const TitleName = styled.li`
display: block;
list-style: none;
font-size: 1.3rem;
font-weight: bold;
padding-bottom: 1rem;
text-transform: capitalize;
  @media ${device.desktop}{
  display: none;
  }
`;

export const ImageWrapp = styled.div`
display: flex; 
justify-content: center;
align-items: center; 
`;

export const ImageContainer = styled.div`
display: block;
overflow: hidden;
border-radius: 50%;
width: 7rem;
height: 7rem;
margin: 0 auto;
  @media ${device.desktop}{
    display: block;
    overflow: hidden;
    border-radius: 0;
    width: auto;
    height: auto;
    border-top-left-radius: .9rem;
    border-bottom-left-radius: .9rem;
  };
`;

export const Image = styled.img`
width: 100%;
height: 100%;
`;

export const BonusesContainer = styled.ul`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
line-height: none;
padding: 0;
margin: 0;
@media ${device.desktop}{
  line-height: 2.5rem;

}
`;
export const RowContent = styled.span`
display: flex;
font-size: 1rem;
font-weight: normal;
`;

export const Description = styled.li`
font-size: 1rem;
list-style: none;
  @media ${device.desktop}{
    font-size: 1.5rem;
  };
`;

export const Price = styled(Description)`
font-size: 1rem;
font-weight: normal;
@media ${device.desktop}{
font-size: 2rem;
font-weight: bold;
}
`;

export const FreeSpins = styled(Description)`
text-transform: uppercase;
`;

export const UserRatingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const RatingContainer = styled.div`
display: none;
  @media ${device.desktop}{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
 }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;
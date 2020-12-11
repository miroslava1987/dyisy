import styled from 'styled-components';
import { device } from '../../styles/breakpoints';


export const StyledButton = styled.button`
font-size: 1rem;
font-weight: bold;
margin: ${props => props.center ? '0 auto' : '0'};
color: ${props => props.color ? '#fff' : '#00DD00'};
background-color: ${props => props.color ? '#00DD00' : '#fff'};
border: .1rem solid #00DD00;
padding: .5rem 3rem;
border-radius: .5rem;
transition: all .3s linear;
  &:hover{
    cursor: pointer;
    color: ${props => props.color ? '#00DD00' : '#fff'};
    background-color: ${props => props.color ? '#fff' : '#00DD00'};
    border: .1rem solid #00DD00;
};
  &:focus{
    outline: none;
};
@media ${device.desktop}{
  padding: 1rem 6rem;
}
/* font-weight: bold;
margin: ${props => props.center ? '0 auto' : '0'};
color: ${props => props.color ? '#fff' : '#00DD00'};
background-color: ${props => props.color ? '#00DD00' : '#fff'};
border: .1rem solid #00DD00;
padding: 1rem 6rem;
border-radius: .5rem;
transition: all .3s linear;
  &:hover{
    cursor: pointer;
    color: ${props => props.color ? '#00DD00' : '#fff'};
    background-color: ${props => props.color ? '#fff' : '#00DD00'};
    border: .1rem solid #00DD00;
};
  &:focus{
    outline: none;
}; */
`;
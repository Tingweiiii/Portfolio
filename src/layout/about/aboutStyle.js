import styled from "styled-components";
import { Container, Heading5, p, textStructure } from "../../GlobalStyle";

export const AboutContainer = styled(Container)``
export const AboutContent = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 4rem;

@media screen and (max-width: 991px){
    flex-direction: column;
}
`
export const HeroIcon = styled.img`
width: 300px;
height: 300px;

@media screen and (max-width: 991px){
    width: 280px;
    height: 280px;
}
@media screen and (max-width: 768px){
    width: 260px;
    height: 260px;
}
`
export const AboutList = styled(textStructure)`
width: 100%;
max-width: 440px;
gap: 1rem;
align-items: flex-start;
`
export const AboutTitle = styled(Heading5)`
color: ${props => props.theme.colors.primary};
`
export const AboutText = styled(p)`
color: ${props => props.theme.colors.black};

svg {
    margin-right: 1rem;
    color: ${props => props.theme.colors.secondary};
}
`
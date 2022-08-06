import styled from "styled-components";
import { Container, Group, Button, Heading6, Heading4, p, textStructure } from '../../GlobalStyle'

export const ProjectContainer = styled(Container)``
export const ProjectSlider = styled.div`
display: flex;  // project上下排列會導致點擊按鈕時，頁面向下偏移
`
export const ProjectItem = styled.div``
export const ProjectContent = styled(textStructure)`
padding: 4rem 8rem;
background-color: ${props => props.bgc || props.theme.colors.white};

@media screen and (max-width: 991px){
    padding: 2rem 4rem;
}
@media screen and (max-width: 768px){
    padding: 2rem;
}
`
export const ProjectImage = styled.img`
width: 100%;
border-radius: 5px;
box-shadow: 0 0 30px 0 ${props => props.theme.colors.black75};
vertical-align: middle;
`
export const ProjectTextGroup = styled(textStructure)`
padding: 0 4rem;
text-align: center;

@media screen and (max-width: 991px){
    padding: 0 2rem;
}
@media screen and (max-width: 768px){
    padding: 0 1rem;
}
`
export const ProjectTitle = styled(Heading4)`
color: ${props => props.theme.colors.white};
letter-spacing: 1px;
`
export const ProjectSubTitle = styled(Heading6)`
color: ${props => props.theme.colors.white};
`
export const ProjectText = styled(p)`
color: ${props => props.theme.colors.white};
`
export const ProjectButtonGroup = styled(Group)`
margin-top: 4rem;
`
export const ProjectButton = styled(Button)`
background-color: ${props => props.theme.colors.black75};
color: ${props => props.theme.colors.white};
font-size: 1.5rem;
`
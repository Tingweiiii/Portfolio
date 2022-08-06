import styled from "styled-components";
import { Container, textStructure, Heading1, Heading2, p, Button } from "../../GlobalStyle";

export const HeroContainer = styled(Container)`
gap: 2rem;
`
export const HeroHeading = styled(textStructure)``
export const HeroTitle = styled(Heading2)`
background: ${props => props.theme.colors.linear};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
export const HeroSubTitle = styled(Heading1)``
export const HeroText = styled(p)`
color: ${props => props.theme.colors.black75};
`
export const HeroButton = styled(Button)`
background: ${props => props.theme.colors.linear};
color: ${props => props.theme.colors.white};
margin-top: 4rem;
`
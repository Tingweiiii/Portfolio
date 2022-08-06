import styled from "styled-components"
import { textStructure, Heading3, p } from "../../GlobalStyle"

export const HeadingContainer = styled(textStructure)``
export const HeadingTitle = styled(Heading3)`
font-weight: 700;
color: ${props => props.theme.colors.black75};
position: relative;

&::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: .5rem;
    transform: translateX(-50%);
    width: 120%;
    height: 1rem;
    background-color: ${props => props.theme.colors.primary};
    z-index: -1;
}
`
export const HeadingSubTitle = styled(p)`
color: ${props => props.theme.colors.black50};
`
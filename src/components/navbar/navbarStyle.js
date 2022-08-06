import styled from "styled-components"
import { Group, Heading5, Heading6 } from "../../GlobalStyle"

export const NavbarContainer = styled.nav`
width: 100%;
height: 4rem;
background-color: ${props => props.theme.colors.white};
padding: 0 4rem;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 999;

@media screen and (max-width: 991px){
    padding: 0 2rem;
}
`
export const NavbarContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 4rem;
flex: 1;
transition: all .5s ease;

@media screen and (max-width: 991px){
    padding: 4rem;
    flex-direction: column;
    gap: 4rem;
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    top: ${({click}) => click ? "4rem" : "-1000%"};
    left: 0;
    box-shadow: 0 4px 4px 0 ${props => props.theme.colors.black10};
}
`
export const NavLogo = styled(Heading5)`
color: ${props => props.theme.colors.black};
cursor: pointer;
`
export const NavGroup = styled(Group)``
export const NavMenu = styled.div`
display: flex;
gap: 2rem;
text-align: center;

@media screen and (max-width: 991px){
    flex-direction: column;
}
`
export const NavLink = styled(Heading6)`
color: ${props => props.theme.colors.black75};
transition: all .5s ease;
cursor: pointer;

&:hover {
    color: ${props => props.theme.colors.secondary};
}
`
export const NavSocialLink = styled.a`
font-size: 1.4rem;
color: ${props => props.theme.colors.black};
cursor: pointer;
vertical-align: middle;

&:hover {
    color: ${props => props.theme.colors.secondary};
}
`
export const MobileToggle = styled.i`
display: none;
cursor: pointer;
font-size: 1.1rem;

@media screen and (max-width: 991px){
    display: block;
}
`
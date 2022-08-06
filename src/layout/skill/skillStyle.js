import styled from "styled-components";
import { Container, Group, Button, Heading6 } from "../../GlobalStyle";

export const SkillContainer = styled(Container)``
export const TabContainer = styled.div`
display: flex;
flex-direction: column;
gap: 6rem;
`
export const Tabs = styled(Group)``
export const Tab = styled(Button)`
background: ${props => props.theme.colors.linear};
`
export const TabText = styled(Heading6)`
color: ${props => props.theme.colors.white};
`
export const TabContent = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;

@media screen and (max-width: 991px){
    grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
`
export const TabItem = styled.li`
width: 100%;
background-color: ${props => props.theme.colors.black10};
padding: 2rem;
text-align: center;
border-radius: 5px;
`
export const TabIcon = styled.img`
vertical-align: middle;
`
export const TabTitle = styled(Heading6)`
color: ${props => props.theme.colors.black};
`
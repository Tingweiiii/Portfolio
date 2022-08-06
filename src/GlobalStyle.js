import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
html, body{
    font-family: Helvetica, sans-serif;
    position: relative;
    scroll-behavior: smooth;
}
`

//template

export const Wrap = styled.div`
width: 100%;
`
export const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
margin: 16rem 0;
padding: 0 8rem;
gap: 8rem;
position: relative;

@media screen and (max-width: 991px){
    padding: 0 5rem;
}
@media screen and (max-width: 768px){
    padding: 0 2rem;
}
`
export const textStructure = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 2rem;
`
export const Group = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
`

//component style

export const Button = styled.div`
padding: 1rem 2rem;
border-radius: 20px;
box-shadow: inset 0 -8px 0 0 ${props => props.theme.colors.black25};
text-shadow: 0 2px 0 ${props => props.theme.colors.black25};
text-align: center;
letter-spacing: 1px;
cursor: pointer;
transition: all .5s ease;

&:active {
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.colors.black25};
    text-shadow: 0 0 0 ${props => props.theme.colors.black25};
}
`

//typography

export const Heading1 = styled.h1`
font-size: 90px;
line-height: 112px;
font-weight: 700;

@media screen and (max-width: 991px){
    font-size: 67px;
    line-height: 88px;
}

@media screen and (max-width: 768px){
    font-size: 49px;
    line-height: 64px;
}
`
export const Heading2 = styled.h2`
font-size: 64px;
line-height: 80px;
font-weight: 700;

@media screen and (max-width: 991px){
    font-size: 51px;
    line-height: 64px;
}

@media screen and (max-width: 768px){
    font-size: 39px;
    line-height: 48px;
}
`
export const Heading3 = styled.h3`
font-size: 45px;
line-height: 56px;
font-weight: 400;

@media screen and (max-width: 991px){
    font-size: 38px;
    line-height: 48px;
}

@media screen and (max-width: 768px){
    font-size: 31px;
    line-height: 40px;
}
`
export const Heading4 = styled.h4`
font-size: 32px;
line-height: 40px;
font-weight: 700;

@media screen and (max-width: 991px){
    font-size: 28px;
    line-height: 40px;
}

@media screen and (max-width: 768px){
    font-size: 25px;
    line-height: 32px;
}
`
export const Heading5 = styled.h5`
font-size: 23px;
line-height: 32px;
font-weight: 700;

@media screen and (max-width: 991px){
    font-size: 21px;
    line-height: 32px;
}

@media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 24px;
}
`
export const Heading6 = styled.h6`
font-size: 16px;
line-height: 24px;
font-weight: 700;
`
export const p = styled.p`
font-size: 16px;
line-height: 24px;
font-weight: 400;
`

//theme

export const theme = {
    colors: {
      primary: "rgba(116, 181, 242, 1)",
      secondary: "rgba(94, 126, 219, 1)",
      linear: "linear-gradient(90deg, #74B5F2 0%, #5E7EDB 100%)",
      black: "rgba(34, 37, 40, 1)",
      black75: "rgba(34, 37, 40, .75)",
      black50: "rgba(34, 37, 40, .5)",
      black25: "rgba(34, 37, 40, .25)",
      black10: "rgba(34, 37, 40, .1)",
      black5: "rgba(34, 37, 40, .05)",
      white: "rgba(255, 255, 255, 1)",
    }
}
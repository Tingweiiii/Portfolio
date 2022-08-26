import React from "react"
import { Link } from "react-scroll"
import { HeroContainer, HeroHeading, HeroTitle, HeroSubTitle, HeroText, HeroButton } from "./heroStyle"

function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroHeading>
        <HeroTitle data-aos="fade-left" data-aos-delay="100">Hi, I'm Ian</HeroTitle>
        <HeroSubTitle data-aos="fade-left" data-aos-delay="200">網頁前端工程師</HeroSubTitle>
        <HeroText data-aos="fade-left" data-aos-delay="300">- 希望呈現溫暖且富有故事性的網頁作品 -</HeroText>
        <Link to="project" offset={-128}><HeroButton>Read More</HeroButton></Link>
      </HeroHeading>
    </HeroContainer>
  )
}

export default Hero;

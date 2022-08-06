import React from "react"
import { AboutContainer,AboutContent, HeroIcon, AboutList, AboutTitle, AboutText } from "./aboutStyle"
import { Heading } from "../../components"
import icon from "../../assets/image/photo.png"
import AboutData from "../../data/AboutData"
import { FaCrow } from "react-icons/fa"

function About() {
  return (
    <AboutContainer id="about">
      <Heading title="About" subtitle="關於我的一些小事" />
      <AboutContent>
        <HeroIcon src={icon} alt="heroIcon"/>
        <AboutList>
          <AboutTitle>嗨，我是 Ian ，我是一位網頁前端工程師</AboutTitle>
          {AboutData.map((item) => {
            const {id, desc} = item
            return (
              <AboutText key={id}><FaCrow />{desc}</AboutText>
            )
          })}
          <AboutText>對新事物充滿好奇心、喜歡嘗試。自學的過程更加感知到技術更迭的速度之快，使我必須時刻提醒自己保持競爭力，也是我一直以來對於網頁工程的熱情所在。</AboutText>
        </AboutList>
      </AboutContent>
    </AboutContainer>
  )
}

export default About;

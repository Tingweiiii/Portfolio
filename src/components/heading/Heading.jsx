import React from "react"
import { HeadingContainer, HeadingTitle, HeadingSubTitle} from "./headingStyle"

function Heading({ title, subtitle }) {
  return (
    <HeadingContainer data-aos="fade-up" data-aos-offset="400">
        <HeadingTitle>{title}</HeadingTitle>
        <HeadingSubTitle >{subtitle}</HeadingSubTitle>
    </HeadingContainer>
  )
}

export default Heading;

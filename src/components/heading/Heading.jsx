import React from "react"
import { HeadingContainer, HeadingTitle, HeadingSubTitle} from "./headingStyle"

function Heading({ title, subtitle }) {
  return (
    <HeadingContainer>
        <HeadingTitle>{title}</HeadingTitle>
        <HeadingSubTitle>{subtitle}</HeadingSubTitle>
    </HeadingContainer>
  )
}

export default Heading;

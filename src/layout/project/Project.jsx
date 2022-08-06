import React, { useState } from "react"
import { Heading } from "../../components"
import { ProjectContainer, ProjectSlider, ProjectItem, ProjectContent, ProjectImage, ProjectTextGroup, ProjectTitle, ProjectSubTitle, ProjectText, ProjectButtonGroup, ProjectButton } from "./projectStyle"
import ProjectData from "../../data/ProjectData"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function Project() {

  const [sliderIndex, setSliderIndex] = useState(0)

  const handlePrev = () => {
    setSliderIndex(sliderIndex === 0 ? ProjectData.length - 1 : sliderIndex - 1)
  }
  const handleNext = () => {
    setSliderIndex(sliderIndex === ProjectData.length - 1 ? 0 : sliderIndex + 1)
  }

  return (
    <ProjectContainer id="project">
      <Heading title="Project" subtitle="慢慢累積中..." />
      <ProjectSlider>
        {ProjectData.map((item, index) => {
          const {id, img, title, subTitle, desc, bgc} = item
          return ( 
            <ProjectItem key={id}>
              {index === sliderIndex && (
                <ProjectContent bgc={bgc}>
                  <ProjectImage src={img} alt={title} />
                  <ProjectTextGroup>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectSubTitle>{subTitle}</ProjectSubTitle>
                    <ProjectText>{desc}</ProjectText>
                  </ProjectTextGroup>
                  <ProjectButtonGroup>
                    <ProjectButton onClick={handlePrev}><MdChevronLeft /></ProjectButton>
                    <ProjectButton onClick={handleNext}><MdChevronRight /></ProjectButton>
                  </ProjectButtonGroup>
                </ProjectContent>
              )}
            </ProjectItem>
          )
        })}
      </ProjectSlider>
    </ProjectContainer>
  )
}

export default Project;



// <ProjectContent>
// <ProjectImage src={netflix} alt="netflix"></ProjectImage>
// <ProjectTitle>Netflix</ProjectTitle>
// <ProjectText>lorem sslegs snlsn slfvn saawl , aeiaqona klsvnv anlvs.</ProjectText>
// </ProjectContent>
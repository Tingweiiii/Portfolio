import React, { useState } from "react"
import { SkillContainer, TabContainer, Tabs, Tab, TabText, TabContent, TabItem, TabIcon, TabTitle } from "./skillStyle"
import { Heading } from "../../components"
import SkillData from "../../data/SkillData"

function Skill() {

  const [toggleSelect, setToggleSelect] = useState(1)

  return (
    <SkillContainer id="skill">
      <Heading title="Skill" subtitle="以下是一些經常使用的技能及工具" />
      <TabContainer>
        <Tabs>
          <Tab onClick={() => setToggleSelect(1)}><TabText>Development</TabText></Tab>
          <Tab onClick={() => setToggleSelect(2)}><TabText>Other Tools</TabText></Tab>
        </Tabs>
        <TabContent>
          {SkillData.filter((item) => {
            return item.index === toggleSelect
          }).map((skill) => {
            const {id, icon, title} = skill
            return (
              <TabItem key={id}>
                <TabIcon src={icon} alt={title} />
                <TabTitle>{title}</TabTitle>
              </TabItem>
            )
          })}
        </TabContent>
    </TabContainer>
    </SkillContainer>
  )
}

export default Skill;

import React from "react"
import { Navbar, Footer, Banner } from "../components"
import { Wrap } from "../GlobalStyle"
import { Hero, About, Skill, Project } from "../layout"

function Home() {
  return (
    <>
      <Navbar />
      <Wrap>
        <Hero />
        <Banner />
        <About />
        <Skill />
        <Project />
        <Footer />
      </Wrap>
    </>
  )
}

export default Home;

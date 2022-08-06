import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { NavbarContainer, NavbarContent, NavGroup, NavMenu, NavLink, NavLogo, NavSocialLink, MobileToggle } from "./navbarStyle"
import { IoMail, IoLogoGithub, IoMenu, IoClose } from "react-icons/io5"

function Navbar() {

  const [show, setShow] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 100 ? setShow(true) : setShow(false)
    })
    return (() => window.removeEventListener("scroll", null))
  },[])
  
  return (
    <NavbarContainer show={show}>
      <Link to="hero" offset={-256}><NavLogo>Ian's Portfolio</NavLogo></Link>
      <NavbarContent show={show} click={click}>
        <NavMenu>
          <Link to="about" offset={-96}><NavLink onClick={() => setClick(!click)}>About</NavLink></Link>
          <Link to="skill" offset={-96}><NavLink onClick={() => setClick(!click)}>Skill</NavLink></Link>
          <Link to="project" offset={-96}><NavLink onClick={() => setClick(!click)}>Project</NavLink></Link>
        </NavMenu>
        <NavGroup>
          <NavSocialLink href="mailto:wei11217731@gmail.com" target="_blank" aria-label="Gmail"><IoMail /></NavSocialLink>
          <NavSocialLink href="https://github.com/Tingweiiii" target="_blank" aria-label="Github"><IoLogoGithub /></NavSocialLink>
        </NavGroup>
      </NavbarContent>
      <MobileToggle onClick={() => setClick(!click)}>
        {click ? <IoClose /> : <IoMenu />}
      </MobileToggle>
    </NavbarContainer>
  )
}

export default Navbar;
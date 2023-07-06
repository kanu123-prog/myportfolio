import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Navbar,Container } from 'react-bootstrap'
import { useState } from 'react';
import logo1 from '../assets/images/logo1.png'
import linkedin from '../assets/images/linkedinfinal.png'
import github from '../assets/images/github.svg'
import insta from '../assets/images/instagram.png'

function NavBar() {
  const [activeLink,setActiveLink]= useState("home");
  const [scrolled, setScrolled]= useState(false);

  useEffect(()=>{
    const onScroll=()=>{
       if (window.scrollY>50){
        setScrolled(true);
       }else{
        setScrolled(false)
       }
    }
    window.addEventListener("scroll", onScroll)

    return ()=> window.removeEventListener("scroll",onScroll)
  },[])

  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }
  return (
         <>
      <Navbar expand="lg" className={scrolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo1} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className='navbar-toggler-icon'></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink==="about"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#qualifications" className={activeLink==="qualifications"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('qualifications')}>Qualifications</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src={linkedin} alt="" /></a>
              <a href="#"><img src={github} alt="" /></a>
              <a href="#"><img src={insta} alt="" /></a>
            </div>
            <button className='vvd'  onClick={()=>console.log("connect")}>
            <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar


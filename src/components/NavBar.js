import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Navbar,Container } from 'react-bootstrap'
import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import navIcon1 from '..assets/images/nav-icon-1'
import navIcon2 from '..assets/images/nav-icon-2'
import navIcon3 from '..assets/images/nav-icon-3'
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
        <Navbar.Brand href="#home"><img src={""} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className='navbar-toggler-icon'></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink==="about"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('about')}>Link</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src={""} alt="" /></a>
              <a href="#"><img src={""} alt="" /></a>
              <a href="#"><img src={""} alt="" /></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}>
            <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar


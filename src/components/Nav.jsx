import React, { useState } from 'react'
import styled from 'styled-components'
// import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { LogoImg } from '../Assets'
import {BiMenuAltRight} from 'react-icons/bi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Header = styled.div`
width: 98%;
margin: auto;
height: 105px;
gap: 48px;
display: grid;
grid-template-columns: 20% auto auto;
justify-content: center;
align-items: center;
padding: 0px;
background: rgba(255, 252, 251, 0.9);
position: fixed;
top: 0;
justify-items: center;
z-index: 10;

@media (max-width: 1200px) {
  grid-template-columns: 80% 20%;
  justify-content: space-between;
}

& .menu {
  font-size: 33px;

  @media (min-width: 1200px) {
    display: none;
  }
}
`
const Logo = styled.div`
width: 100%;
height: 40.5px;
`

const List = styled.ul`
width: 100%;
display: flex;
list-style-type: none;
justify content: center;
align-items: center;
flex-wrap: wrap;
padding: 10px;
gap: 2em;

& li {
  font-weight: 700;
  font-size: 2.1vh;
  text-align: center;

  & a {
    text-decoration: none;
    color: #161B45;

    &:hover {
      text-decoration: underline
    }
  }
}

@media (max-width: 1200px) {
  display: none;
}
`
const Reg = styled(List)`
padding: 0px;
gap: 24px;
font-weight: 700;
font-size: 1.8vh;

& #log {
  color: #F15E38;
  text-decoration: none;
  font-size: 2vh;
}

& #reg {
padding: 10px;
gap: 10px;
border: none;
background: #F15E38;
border-radius: 9px;
color: rgba(255, 252, 251, 0.9);
}

@media (max-width: 1200px) {
  display: none;
}
` 
const Bar = styled.div`
width: 40%;
position: absolute;
top: 0;
left: 0;
background: rgba(255, 252, 251, 1);
height: 100vh;
display: none;

& .close {
  font-size: 40px;
  float: right;

  &:hover {
    color: red;
  }
}

@media (min-width: 1200px) {
  display: none;
}
`
const SideList = styled(List)`
flex-direction: column;
margin-top: 33% !important;

  & a {
    color: #161B45 !important;
    font-size: 3vh;
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`
const SideReg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-weight: 700;
font-size: 3vh !important;

& #log {
  color: #F15E38 !important;
  text-decoration: none;
}

& #reg {
  margin-top: 23%;
padding: 15px 25px;
gap: 10px;
border: none;
background: #F15E38;
border-radius: 6px;
font-size: 2.8vh;
color: rgba(255, 252, 251, 0.9);
}
`

const Nav = () => {
//  const close = {Bar}
  const [SideBar, setSideBar] = useState(false);

  const closeButton = () => {
    setSideBar(!SideBar)
  }

  return (
    <>
    <Header>
      <Logo>
        <img src={LogoImg} alt=""/>
      </Logo>
      <List>
        <li><Link to ="about">About us</Link></li>
        <li><Link to="faq">FAQ</Link></li>
        <li><Link to="/">Support</Link></li>
        <li><a href= "https://blog.klasshour.com/">Blog</a></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="become a tutor">Become a tutor</Link></li>
      </List>
      <Reg>
        <a href="/" id='log'>Login</a>
        <a href="/"><button id='reg'>Register</button></a>
      </Reg>

      {/* SideBar links starts here */}
        <BiMenuAltRight className='menu' />
      <Bar>
        <VscChromeClose className='close' onClick={closeButton}/>
        <SideList>
        <li><a href= "/">About us</a></li>
        <li><a href= "/">FAQ</a></li>
        <li><a href= "/">Support</a></li>
        <li><a href= "/">Blog</a></li>
        <li><a href= "/">Become a tutor</a></li>
      </SideList>
      <SideReg>
        <a href="/" id='log'>Login</a>
        <a href="/"><button id='reg'>Register</button></a>
      </SideReg>
      </Bar>
      {/* Sidebar links end here */}
    </Header>
    </>
  )
}

export default Nav
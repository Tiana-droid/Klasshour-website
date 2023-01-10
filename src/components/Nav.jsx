import React, { useState } from 'react'
import styled from 'styled-components'
import { LogoImg } from '../Assets'
import {BiMenuAltRight} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

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
background: rgba(255, 252, 251, 1);
position: fixed;
top: 0;
justify-items: center;
z-index: 10;

@media (max-width: 1200px) {
  width:100%;
  padding: 20px;
  grid-template-columns: 80% 20%;
  justify-content: space-between;
  gap: 16px;
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
  font-size: 2.4vh;
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
font-size: 2.2vh;

& #log {
  color: #F15E38;
  text-decoration: none;
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

const Nav = () => {
  const [sidebar, setSideBar] = useState(false);

  const openSidebar = () => setSideBar(!sidebar)

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
        <BiMenuAltRight className='menu' onClick={openSidebar} style={{cursor: 'pointer'}}/>
        {sidebar && <Sidebar active={setSideBar}/>}
      {/* Sidebar links end here */}
    </Header>
    </>
  )
}

export default Nav
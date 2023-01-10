import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  width: 40%;
  position: absolute;
  margin-right: 0;
  top: 0;
  background: rgba(255, 252, 251, 0.9);
  height: 100vh;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @media (max-width: 700px) {
    width: 60%;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 40%;
    }
  }

  & .close {
    font-size: 40px;
    float: right;
    margin-top: 10%;
    margin-right: 16px;
    color: red;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
const SideList = styled.ul`
flex-direction: column;
margin-top: 33% !important;
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
  text-align: center;

  & a {
    color: #161B45 !important;
    font-size: 19px;

    &:hover {
        text-decoration: underline
      }
  }
  
  @media (max-width: 1200px) {
    display: flex;
  }
}
`;
const SideReg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  
  & #log {
      font-size: 19px;
    color: #f15e38 !important;
    text-decoration: none;
  }

  & #reg {
    margin-top: 23%;
    padding: 10px 20px;
    gap: 10px;
    border: none;
    background: #f15e38;
    border-radius: 6px;
    color: rgba(255, 252, 251, 0.9);
  }
`;

const Sidebar = ({active}) => {

    const closeSidebar = () => {
        active(false)
      }

  return (
    <>
      <Bar sidebar={active}>
        <VscChromeClose className="close" onClick={closeSidebar}/>
        <SideList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <a href="https://blog.klasshour.com/">Blog</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Become a tutor</Link>
          </li>
        </SideList>
        <SideReg>
          <a href="/" id="log">
            Login
          </a>
          <a href="/">
            <button id="reg">Register</button>
          </a>
        </SideReg>
      </Bar>
    </>
  );
};

export default Sidebar;

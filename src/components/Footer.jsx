import React from "react";
import { LogoImg2, Instagram, Facebook, Twitter, Youtube } from "../Assets";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrap = styled.div`
  width: 100%;
  height: fit-content;
  background: #161b45;
  border-top: 10px solid #f15e38;
  display: grid;
  margin-top: 7%;
`;
const FooterContainer = styled.footer`
  width: 90%;
  margin: 50px auto;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: flex-start;
  color: rgba(255, 252, 251, 0.9);
  gap: 3em;

  & h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(255, 252, 251, 0.9);
  }
  & span {
    font-weight: 400;
    font-size: 16px;
    margin-block-start: 2em;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(255, 252, 251, 0.9);
  }

  & .div4 {
    margin-left: 22%;

    @media (max-width: 1089px) {
      margin-left: 0;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 774px) {
    align-items: flex-start;
  }
`;
const List = styled.ul`
  list-style-type: none;

  & li {
    font-size: 16px;
    font-weight: 400;
    margin-top: 9px;

    & a {
      text-decoration: none;
      color: rgba(255, 252, 251, 0.9);
    }
  }
`;
const SM = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 185px;
  height: 24px;
  justify-content: space-between;
  margin-top: 20px;
`;
const SM2 = styled(SM)`
  width: 165px;
  height: 24px;
  margin-top: 0;

  @media (max-width: 498px) {
    display: none;
  }
`;
const Copyright = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;

  & p {
    color: white !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-block-end: 0;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterContainer>
          <div className="div1" style={{ width: "100%" }}>
            <div
              className="logo"
              style={{ marginTop: "20px", marginBottom: "30px" }}
            >
              <img src={LogoImg2} alt="" />
            </div>
            <span>
              Find perfect tutors in all subjects and get complicated <br /> questions answered in real - time
            </span>
          </div>

          <Div>
            <List>
              <h3>Company</h3>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <a href="https://blog.klasshour.com/">Blog</a>
              </li>
              <li>
                <Link to="/">Become a tutor</Link>
              </li>
            </List>
          </Div>
          <Div>
            <List>
              <h3>Help</h3>
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
                <Link to="/">Become a tutor</Link>
              </li>
            </List>
          </Div>

          <div className="div4">
            <h3 style={{ width: "92px" }}>Contact us</h3>
            <SM>
              <a href="/" className="icon">
                {" "}
                <img src={Twitter} alt="" />
              </a>
              <a href="/" className="icon">
                <img src={Facebook} alt="" />
              </a>
              <a href="/" className="icon">
                <img src={Youtube} alt="" />
              </a>
              <a href="/" className="icon">
                <img src={Instagram} alt="" />
              </a>
            </SM>
          </div>
        </FooterContainer>
          <div className="line" style={{border:' 0.5px solid #FFFFFF'}}></div>
        <Copyright>
          <SM2>
            <a href="/" className="icon">
              {" "}
              <img src={Twitter} alt="" />
            </a>
            <a href="/" className="icon">
              <img src={Facebook} alt="" />
            </a>
            <a href="/" className="icon">
              <img src={Youtube} alt="" />
            </a>
            <a href="/" className="icon">
              <img src={Instagram} alt="" />
            </a>
          </SM2>
          <p>&copy; Copyright 2023, Klasshour Technologies Ltd.</p>
        </Copyright>
      </FooterWrap>
    </>
  );
};

export default Footer;

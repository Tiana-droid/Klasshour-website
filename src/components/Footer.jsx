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
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: flex-start;
  color: rgba(255, 252, 251, 0.9);
  justify-content: center;
  padding: 10px;
  gap: 3em;

  & h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(255, 252, 251, 0.9);

    @media (max-width: 549px) {
      text-align: justify;
    }
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
    width: 60%;

    @media (max-width: 531px) {
      width: 40%;
    }
  }
`;
const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 10px;
  text-align: left;

  @media (max-width: 549px) {
    text-align: justify;
  }

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
  padding: 0px 10px;
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
`;
const Copyright = styled.div`
  width: 100%;
  border-top: 0.5px solid #ffffff;
  padding: 10px;
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
              Find perfect tutors in all subjects and get complicated questions
              answered in real - time
            </span>
          </div>

          <div className="div2" style={{ width: "100%", textAlign: "left" }}>
            <h3>Company</h3>
            <List>
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
                <a href="/become a tutor">Become a tutor</a>
              </li>
            </List>
          </div>
          <div className="div3" style={{ width: "100%", textAlign: "left" }}>
            <h3>Help</h3>
            <List>
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
                <a href="/become a tutor">Become a tutor</a>
              </li>
            </List>
          </div>

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
        <Copyright>
          <p>&copy; Copyright 2023, Klasshour Technologies Ltd.</p>
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
        </Copyright>
      </FooterWrap>
    </>
  );
};

export default Footer;

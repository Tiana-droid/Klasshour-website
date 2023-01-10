import React from "react";
import { LogoImg2, Instagram, Facebook, Twitter, Youtube } from "../Assets";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  background: #161b45;
  border-top: 10px solid #f15e38;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: flex-start;
  color: rgba(255, 252, 251, 0.9);
  justify-content: center;
  padding: 10px 20px;
  column-gap: 7em;
  row-gap: 3em;
  margin-top: 7%;

  & h3,
  span {
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
    font-weight: 400 !important;
    margin-block-start: 2em;
  }
`;
const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 10px;
  text-align: center;

  @media (max-width: 549px) {
    text-align: justify;
  }

  & li {
    font-size: 2vh;
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
  gap: 10px;
  justify-content: space-between;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <>
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

        <div className="div2" style={{ width: "100%", textAlign: "center" }}>
          <h3>Company</h3>
          <List>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Become a tutor</a>
            </li>
          </List>
        </div>

        <div className="div3" style={{ width: "60%" }}>
          <h3>Follow us</h3>
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
    </>
  );
};

export default Footer;

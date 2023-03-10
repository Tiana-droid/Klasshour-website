import React from "react";
import styled from "styled-components";
import { Img1, Img2, Img3, Img4 } from "../Assets";

export const ContainerWrap = styled.div`
  width: 100%;
  background: #f6f6f8;
  height: fit-content;
  margin-top: 10%;
  padding: 20px 0px;
  @media (max-width: 1115px) {
    margin-top: 20%;
  }
  @media (max-width: 670px) {
    margin-top: 30%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  background: #f6f6f8;
  height: fit-content;
  display: flex;
  gap: 3em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1115px) {
    flex-direction: column;
  }
`;
const ShowCase = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5em;
  justify-items: center;

  & img {
    width: 90%;
    // overflow-x: hidden;
  }
`;
const Text = styled.div`
  margin-left: 40px;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
    margin-left: 10px;
  }

  & h1 {
    text-transform: uppercase;
    color: #161b45;
    font-weight: 800;
    font-size: 54px;
    line-height: 63px;
    margin-block-start: -1.4em;
    margin-block-end: 0px;

    @media (max-width: 600px) {
      font-size: 42px;
    }

    @media (max-width: 1115px) {
      margin-block-start: -0.67em;
    }
  }

  & span {
    color: #292929;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    @media (max-width: 600px) {
      font-size: 21px;
    }
  }
  & button {
    padding: 10px;
    background: #f15e38;
    border-radius: 9px;
    border: none;
    outline: none;
    font-size: 1em;
    color: rgba(255, 252, 251, 0.9);
    width: 165px;
    height: 54px;
  }
`;

const Landing = () => {
  return (
    <>
      <ContainerWrap>
        <Wrapper>
          <ShowCase>
            <img src={Img1} alt="img" />
            <img src={Img2} alt="img" />
            <img src={Img3} alt="img" />
            <img src={Img4} alt="img" />
          </ShowCase>
          <Text>
            <h1>
              get <b style={{ color: "#F15E38" }}>instant</b> help
            </h1>
            <span>
              Online & Home Tutoring. Homework Help. <br /> Test Prep.
            </span>{" "}
            <br /> <br />
            <button>Get started</button>
          </Text>
        </Wrapper>
      </ContainerWrap>
    </>
  );
};

export default Landing;

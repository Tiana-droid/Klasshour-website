import React from "react";
import styled from "styled-components";
import { Credit, Rafik, Researching, Skill, Teaching, Test } from "../Assets";

const CardContainer = styled.div`
  margin: auto;
  margin-top: 6%;
  width: 80%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3em;
  justify-content: center;
  align-items: center;
`;
const CardContent = styled.div`
  filter: drop-shadow(17px 17px 0px #161b45);
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 381px;
  padding: 20px;

  & img {
    margin-bottom: 37px;
  }

  & h3 {
    font-weight: 800;
    font-size: 2em;
    text-align: center;
    color: #161b45;
    margin-block-end: 0;
  }

  & p {
    width: 80%;
    margin: 10px auto;
    font-weight: 400;
    font-size: 1em;
    line-height: 19px;
    color: #292929;
  }
`;

const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 81%;
  margin: auto;
  gap: 4em;
  margin-top: 10%;
  
  @media (max-width: 830px) {
    margin-top: 18%;
  }
  @media (max-width: 570px) {
    width: 95%;
    margin: auto;
    margin-top: 30% !important;
  }
  @media (max-width: 300px) {
    width: 100%;
    margin: auto;
    margin-top: 30%;
  }
`;
const BC = styled(CardContent)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  height: 560px;

  @media (max-width: 830px) {
    height: fit-content;
  }

  @media (max-width: 421px) {
    padding: 20px 0px;
  }

  & h1 {
    font-size: 32px;
    text-align: left;
    margin: auto;
    width: 90%;
    margin-block-end: 0.67em;
    font-weight: 800;
    
    @media (max-width: 830px) {
      text-align: center;
    }

    @media (max-width: 650px) {
      font-size: 27px;
    }
  }

  & p {
    text-align: left;
    margin: auto;
    width: 90%;
    line-height: 23px;

    @media (max-width: 830px) {
      text-align: center;
    }
  }

  & img {
    width: 90%;
  }
`;

const Card = () => {
  return (
    <>
      <CardContainer>
        <CardContent>
          <img src={Teaching} alt="img" />
          <h3>Online Teaching</h3>
          <p>
            Find a tutor to take you through specific topics or explain certain
            points
          </p>
        </CardContent>
        <CardContent>
          <img src={Skill} alt="img" />
          <h3>Skills</h3>
          <p>Learn a new skill online like baking, graphics design e.t.c</p>
        </CardContent>
        <CardContent>
          <img src={Test} alt="img" />
          <h3>Test / Exam Prep</h3>
          <p>Get a tutor to prepare you for your, upcoming tests and exams</p>
        </CardContent>
      </CardContainer>

      <BigCard>
        <BC>
          <img src={Researching} alt="img" style={{ width: "75%" }} />
          <div>
            <h1>Get complicated questions answered</h1>
            <p>
              You will only pay after you have concluded your session/minutes
              with your tutor
            </p>
          </div>
        </BC>
        <BC>
          <div>
            <h1>Charge per minute</h1>
            <p>
              No minimum or limits to class you can take, you will only be
              charged for the minute of tutoring
            </p>
          </div>
          <img src={Rafik} alt="img" />
        </BC>
        <BC>
          <img src={Credit} alt="img" />
          <div>
            <h1>Pay after a session</h1>
            <p>
              You will only pay after you have concluded your session/minutes
              with your tutor.
            </p>
          </div>
        </BC>
      </BigCard>
    </>
  );
};

export default Card;

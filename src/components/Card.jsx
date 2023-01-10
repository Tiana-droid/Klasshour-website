import React from "react";
import styled from "styled-components";
import { Credit, Rafik, Researching, Skill, Teaching, Test } from "../Assets";

const CardContainer = styled.div`
  margin: auto;
  margin-top: 6%;
  width: 76%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em;
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

  & h3 {
    font-weight: 800;
    font-size: 2em;
    line-height: 38px;
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
  width: 76%;
  margin: auto;
  gap: 4em;
  margin-top: 8%;

  @media (max-width: 350px) {
    width: 98%;
    margin: auto;
    margin-top: 18%;
}
`;
const BC = styled(CardContent)`
  flex-direction: row;
  height: fit-content;

  & h3 {
    font-size: 32px;
    text-align: left;

    @media (max-width: 650px) {
        font-size: 27px;
    }
  }
  & p {
    text-align: left;
    margin: 0;
  }

  & img {
    width: 50%;
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
          <img src={Researching} alt="img" />
          <div style={{float: 'right'}}>
            <h3>Get complicated questions answered</h3>
            <p>
              You will only pay after you have concluded your session/minutes
              with your tutor
            </p>
          </div>
        </BC>
        <BC>
          <div>
            <h3>Charge per minute</h3>
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
            <h3>Pay after a session</h3>
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

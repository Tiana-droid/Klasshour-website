import React from "react";
import styled from "styled-components";
import { Arrow, Arrow2 } from "../Assets";

const Wrapper = styled.div`
  width: 76%;
  margin: auto;
  margin-top: 10%;
  text-align: center;

  & h1 {
    font-weight: 800;
    font-size: 5.3vh;
    line-height: 63px;
    text-align: center;
    color: #161b45;
  }

  & .tutorReg {
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
      font-weight: 400;
      font-size: 2.6vh;
      line-height: 28px;
      text-align: center;
      color: #292929;
    }
  
    & button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
      background: #f15e38;
      border-radius: 9px;
      border: none;
      outline: none;
      font-size: 2.3vh;
      color: rgba(255, 252, 251, 0.9);
      width: 70%;
      height: 54px;
    }
  }

`;

const StepsContainer = styled.div`
  width: 100%;
  height: fit-content;

  @media (max-width: 1156px) {
    display: flex;
    flex-direction: row;
  }
  & .arrow {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 10vh;
    justify-content: center;
    margin-bottom: 20px;

    @media (max-width: 1156px) {
      justify-content: flex-end;
      align-items: center;
      margin-top: 50px;

      & img {
        display: none;
      }

      & .arr {
        width: 55%;
        height: 58vh;
        display: block;
        background-image: url(${Arrow2});
        background-repeat: no-repeat;
        background-position: right;
      }
    }
  }
`;

const Steps = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2em;

  & .steps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 28px;
    background: #ffffff;
    border-top: 4px solid #f15e38;
    border-radius: 0px 0px 25px 25px;

    & .outer-circle {
      width: 64px;
      height: 64px;
      background: #fec3b9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & .inner-circle {
      width: 40.96px;
      height: 40.96px;
      border-radius: 50%;
      background: #f15e38;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 32px;
      color: #fff;
    }

    & h3 {
      font-weight: 800;
      font-size: 3vh;
      line-height: 38px;
      text-align: center;
      color: #161b45;
      margin-block-end: 0;
    }

    & p {
      font-weight: 400;
      font-size: 2vh;
      line-height: 19px;
      text-align: center;
      color: #292929;
    }
  }
`;

const BecomeTutor = () => {
  return (
    <>
      <Wrapper>
        <h1>Get Started with Klasshour</h1>
        <StepsContainer>
          <div className="arrow">
            <img src={Arrow} alt="" />
            <img src={Arrow} alt="" />
            <div className="arr"></div>
            <div className="arr"></div>
          </div>
          <Steps>
            <div className="steps">
              <div className="outer-circle">
                <div className="inner-circle">1</div>
              </div>
              <h3>Post a request</h3>
              <p>
                Post a specific topic, or a specific question. Tutors will apply
                to your request and offer their help.
              </p>
            </div>
            <div className="steps">
              <div className="outer-circle">
                <div className="inner-circle">2</div>
              </div>
              <h3>Choose Tutor</h3>
              <p>
                Choose your tutor among many of thosewho apply. You can select
                depending on reviews, experience, price, and other factors.
              </p>
            </div>
            <div className="steps">
              <div className="outer-circle">
                <div className="inner-circle">3</div>
              </div>
              <h3>Join Class</h3>
              <p>
                Wait for your tutor to start the class, click the join class
              </p>
            </div>
          </Steps>
        </StepsContainer>

        <div className="tutorReg">
          <h1>Become a tutor with Klasshour</h1>
          <p>
            Find students all over the world, Use Klasshour modern
            VirtualClassroom, Teach on your own time and Get paid securely.
          </p>
          <button>Register</button>
        </div>
      </Wrapper>
    </>
  );
};

export default BecomeTutor;

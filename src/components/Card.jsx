import React from 'react'
import styled from 'styled-components'
import { Credit, Rafik, Researching, Skill, Teaching, Test } from '../Assets'

const CardContainer = styled.div`
margin: auto;
margin-top: 6%;
width: 76%;
height: fit-content;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 2em;
justify-content: center;
align-items: center;
`
const CardContent = styled.div`
filter: drop-shadow(5px 3px 0px #161B45);
background: #FFFFFF;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

& h3 {
    font-weight: 800;
    font-size: 3.3vh;
    line-height: 38px;
    text-align: center;
    color: #161B45;
    margin-block-end: 0;
}

& p {
    width: 80%;
    margin: 10px auto;
    font-weight: 400;
    font-size: 2vh;
    line-height: 19px;
    color: #292929;
}
`

const BigCard = styled.div`
display: flex;
flex-direction: column;
width: 76%;
margin: auto;
gap: 4em;
margin-top: 8%;
`
const BC = styled(CardContent)`
flex-direction: row;

& img {
    width: 40%;
}
`

const Card = () => {
  return (
    <>
    <CardContainer>
        <CardContent>
            <img src={Teaching} alt="img" />
            <h3>Online Teaching</h3>
            <p>Find a tutor to take you through specific topics or explain certain points</p>
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
            <div>
            <h3>Get complicated questions answered</h3>
            <p>You will only pay after you have concluded  your session/minutes with your tutor</p>
            </div>
        </BC>
    <BC>
            <div>
            <h3>Charge per minute</h3>
            <p>No minimum or limits to class you can take, you will only be charged for the minute of tutoring</p>
            </div>
            <img src={Rafik} alt="img" />
        </BC>
    <BC>
            <img src={Credit} alt="img" />
            <div>
            <h3>Pay after a session</h3>
            <p>You will only pay after you have concluded your session/minutes with your tutor.</p>
            </div>
        </BC>
    </BigCard>
    </>
  )
}

export default Card
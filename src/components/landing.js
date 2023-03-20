import React from "react";
import styled from "styled-components";
import pix from "../components/welcome-left.png";
import pox from "../components/welcome-right.png";
import log from "../components/icon.jpg";
import app from "../components/apple-app-store-button.svg";
import goo from "../components/google-play-button.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <Left src={pix} />
        <Middle>
          <Logo src={log} />
          <H1>Microsoft Task</H1>
          <P>It gives you focus from work to play</P>
          <Button to="/dashboard">Get Started</Button>

          <P2>Learn More</P2>
          <Down>
            <Apple src={app} />
            <Google src={goo} />
          </Down>
        </Middle>
        <Right src={pox} />
      </Wrapper>
    </Container>
  );
};
export default Landing;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* margin-top: 400px; */

  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const Left = styled.img`
  width: 300px;
  height: 400px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`;
const Right = styled.img`
  width: 300px;
  height: 400px;
  /* object-fit: cover; */
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`;
const Middle = styled.div`
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
  /* object-fit: cover; */
`;
const H1 = styled.div`
  font-size: 35px;
`;
const P = styled.div`
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
const Button = styled(Link)`
  color: white;
  font-size: 14px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  text-decoration: none;
  height: 50px;
`;
const P2 = styled.div`
  font-size: 20px;
  color: royalblue;
  @media (max-width: 400px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Apple = styled.img`
  width: 150px;
  height: 100px;
  /* @media (max-width:400px){

  } */

  @media (max-width: 320px) {
    width: 120px;
  }
`;
const Google = styled.img`
  width: 150px;
  height: 100px;
  @media (max-width: 320px) {
    width: 120px;
  }
`;

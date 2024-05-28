import { useState } from "react";
import "./App.css";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import Girl from "/images/girl-ilustartion.webp";
import QuestionContainer from "./components/questionSection";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <GlobalStyle />

      <Styledcontainer>
        <img src={Girl} />
        <StyledTitle>FAQ</StyledTitle>
        <QuestionContainer index={0} setActive={setActive} active={active} />
        <QuestionContainer index={1} setActive={setActive} active={active} />
        <QuestionContainer index={2} setActive={setActive} active={active} />
        <QuestionContainer index={3} setActive={setActive} active={active} />
        <QuestionContainer index={4} setActive={setActive} active={active} />
      </Styledcontainer>
    </>
  );
}

const Styledcontainer = styled.div`
  background-color: white;
  width: 500px;
  border-radius: 20px;
  padding: 30px 10px 10px 20px;
  justify-content: center;
  position: relative;
  padding-bottom: 40px;

  & > img {
    width: 340px;
    position: absolute;
    top: -130px;
    left: 70px;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
    padding-left: 400px;
    padding-right: 100px;
    padding-top: 10px;
    height: 480px;

    & > img {
      width: 450px;
      top: 50px;
      left: -40px;
    }
  }
`;

const StyledTitle = styled.h1`
  color: black;
  margin-top: 70px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    position: relative;
    bottom: 30px;
  }
`;

export default App;

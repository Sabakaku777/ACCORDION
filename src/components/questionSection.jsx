import styled from "styled-components";
import down from "/images/down.webp";
import data from "../data.json";

export default function QuestionContainer({ index, setActive, active }) {
  const question = data[index].question;
  const answer = data[index].answer;

  return (
    <Questionsection
      onClick={() => {
        if (active === index) {
          setActive(null);
        } else {
          setActive(index);
        }
      }}
    >
      <StartQuestion active={active} index={index}>
        <Question active={active} index={index}>
          {question}
        </Question>
        <img src={down} />
      </StartQuestion>
      <Answer>{active === index ? answer : null}</Answer>
    </Questionsection>
  );
}

const Question = styled.h2`
  color: black;
  font-size: 17px;
  margin-top: 20px;
  line-height: 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.active === props.index ? 700 : 400)};
  &:hover {
    color: orange;
  }
  transition: 0.3s;
`;

const Questionsection = styled.div`
  align-items: center;
  border-bottom: solid 1px gray;
  padding-bottom: 10px;

  img {
    width: 15px;
    height: 15px;
    position: relative;
    top: 20px;
    right: 10px;
  }
`;

const Answer = styled.p`
  color: #686868;
  margin-right: 20px;
  margin-top: 10px;
  font-size: 15px;
`;

const StartQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  & > img {
    transform: ${(props) =>
      props.active === props.index ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.3s;
  }
`;

import React from "react";
import { useParams } from "react-router-dom";

// import TextArea from "../../components/TextArea/TextArea";
// import Button from "../../components/Button/Button";
// import Input from "../../components/Input/Input";
// import { Container, Content, QuestionForm } from "./styles";

// import logo from "../../assets/logo.svg";

interface ParamTypes {
  questionId: string;
}

const AnswerQuestion: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();

  return <h1>Answer question route working! {questionId}</h1>;
};

export default AnswerQuestion;

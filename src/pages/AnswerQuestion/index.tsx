import React from "react";
import { useParams } from "react-router-dom";

// import TextArea from "../../components/TextArea/TextArea";
// import Button from "../../components/Button/Button";
// import Input from "../../components/Input/Input";
// import { Container, Content, QuestionForm } from "./styles";

// import logo from "../../assets/logo.svg";

interface ParamTypes {
  question_id: string;
}

const AnswerQuestion: React.FC = () => {
  const { question_id } = useParams<ParamTypes>();

  return <h1>Answer question route working! {question_id}</h1>;
};

export default AnswerQuestion;

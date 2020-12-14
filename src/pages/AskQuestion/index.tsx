import React from "react";
import { useHistory, useLocation } from "react-router-dom";

interface ParamTypes {
  questionText: string;
}
const AskQuestion: React.FC = () => {
  const question = localStorage.getItem("question");
  return <h1>Ask Question Working!!{question}</h1>;
};

export default AskQuestion;

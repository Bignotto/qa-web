import React, { FormEvent, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

interface ParamTypes {
  questionId: string;
}

interface Question {
  user_id: string;
  text: string;
  options?: [
    {
      id: number;
      text: string;
      answers?: [
        {
          user_id: string;
        }
      ];
    }
  ];
}

const AnswerQuestion: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();
  const [question, setQuestion] = useState<Question>({
    user_id: "loading",
    text: "loading",
  });

  useEffect(() => {
    if (!questionId) return;

    api.get(`questions/${questionId}`).then((response) => {
      setQuestion(response.data);
    });
  }, []);

  async function handleAnswer(id: number) {
    console.log(id);
  }

  return (
    <div id="page-answer">
      <header>
        <div className="back-link">
          <Link to="/">
            <FiArrowLeftCircle size="24" />
            Voltar
          </Link>
        </div>
        <img src={logo} alt="Quey Audience" />
      </header>
      <h1>Responda:</h1>
      <h2>{question.text}</h2>
      <div className="question-options">
        {question.options?.map((option) => {
          return (
            <button key={option.id} onClick={() => handleAnswer(option.id)}>
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerQuestion;

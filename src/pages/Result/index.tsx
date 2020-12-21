import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.svg";

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

interface Answer {
  user_id: string;
  question_id: string;
  option_id: number;
}

interface Results {
  [id: number]: number[];
}
const Result: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();
  const [question, setQuestion] = useState<Question>({
    user_id: "loading",
    text: "loading",
  });
  const [results, setResults] = useState<Results>([]);

  useEffect(() => {
    if (!questionId) return;

    api.get(`results/${questionId}`).then((response) => {
      setQuestion(response.data.question);
      setResults(response.data.results);
    });
  }, [questionId]);

  return (
    <div id="page-result">
      <header>
        <img src={logo} alt="Quey Audience" />
        <div className="back-link">
          <Link to="/">
            <FiArrowLeftCircle size="24" />
            Voltar
          </Link>
        </div>
      </header>
      <h1>Resultados:</h1>
      <div className="results">
        <div className="question-title">
          <h2>{question.text}</h2>
        </div>
        <div className="results-content">
          {question.options?.map((option) => {
            return (
              <div className="result">
                <h3>
                  {option.text}: {results[option.id]} votos
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;

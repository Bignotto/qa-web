import React, { useEffect, useMemo, useState } from "react";
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

const Result: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();
  const [question, setQuestion] = useState<Question>({
    user_id: "loading",
    text: "loading",
  });
  const [results, setResults] = useState<number[]>([]);

  useEffect(() => {
    if (!questionId) return;

    api.get(`results/${questionId}`).then((response) => {
      setQuestion(response.data.question);
      setResults(response.data.results);
    });
  }, [questionId]);

  const answersTotal = useMemo(() => {
    const total = results.reduce((a, i) => a + i, 0);
    return total;
  }, [results]);

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
              <div className="result" key={option.id}>
                <h3>{option.text}</h3>
                <p>
                  {results[option.id]} -
                  {(results[option.id] / answersTotal) * 100}
                </p>
                <div
                  className="bar"
                  style={{
                    width: `${(results[option.id] / answersTotal) * 100}%`,
                  }}
                >
                  .
                </div>
              </div>
            );
          })}
        </div>
        <h2>Total de respostas: {answersTotal}</h2>
      </div>
    </div>
  );
};

export default Result;

import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import api from "../../services/api";

import { FiArrowLeftCircle } from "react-icons/fi";
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

interface Answer {
  user_id: string;
  question_id: string;
  option_id: number;
}

const AnswerQuestion: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();
  const [fingerprint, setFingerprint] = useState("");
  const [question, setQuestion] = useState<Question>({
    user_id: "loading",
    text: "loading",
  });

  const history = useHistory();

  useEffect(() => {
    if (!questionId) return;

    api.get(`questions/${questionId}`).then((response) => {
      setQuestion(response.data);
    });
  }, [questionId]);

  useEffect(() => {
    FingerprintJS.load().then((agent) => {
      agent.get().then((result) => {
        setFingerprint(result.visitorId);
      });
    });
  }, []);

  async function handleAnswer(id: number) {
    const answer: Answer = {
      user_id: fingerprint,
      question_id: questionId,
      option_id: id,
    };
    try {
      await api.post("answer", answer);
    } catch (error) {
      console.log(answer, error.response);
    }

    history.push("/result");
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

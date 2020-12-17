import React, { useCallback, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.svg";

const Landing: React.FC = () => {
  const [questionId, setQuestionId] = useState("");
  const [questionText, setQuestionText] = useState("");

  const history = useHistory();

  const handleNewQuestion = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      //event.preventDefault();
      localStorage.setItem("question", questionText);
      history.push("/ask");
    },
    [history, questionText]
  );

  const handleAnswer = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      history.push(`/answer/${questionId}`);
    },
    [history, questionId]
  );

  function handleQuestionTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setQuestionText(event.target.value);
  }

  function handleQuestionIdChange(event: ChangeEvent<HTMLInputElement>) {
    setQuestionId(event.target.value);
  }

  return (
    <div id="page-landing">
      <header>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
      </header>
      <form onSubmit={handleNewQuestion}>
        <div className="field">
          <label htmlFor="questionText">Faça uma pergunta</label>
          <textarea
            name="questionText"
            id="questionText"
            onChange={handleQuestionTextChange}
          />
        </div>
        <button type="submit">Perguntar</button>
      </form>
      <form onSubmit={handleAnswer}>
        <div className="field">
          <label htmlFor="questionId">Responda uma pergunta</label>
          <input
            name="questionId"
            id="questionId"
            onChange={handleQuestionIdChange}
          />
        </div>
        <button type="submit">Perguntar</button>
      </form>
    </div>
  );
};

export default Landing;

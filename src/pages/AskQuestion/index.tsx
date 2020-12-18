import React, { FormEvent, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.svg";

const AskQuestion: React.FC = () => {
  const question = localStorage.getItem("question");

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      history.push("/result");
    },
    [history]
  );

  return (
    <div id="page-new-question">
      <header>
        <img src={logo} alt="Quey Audience" />
        <div className="back-link">
          <Link to="/">
            <FiArrowLeftCircle size="24" />
            Voltar
          </Link>
        </div>
      </header>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        <h3>Escreva as respostas possíveis para sua pergunta:</h3>
        <div className="option">
          <label htmlFor="option1">Opção 1:</label>
          <input type="text" id="option1" />
        </div>
        <div className="option">
          <label htmlFor="option2">Opção 2:</label>
          <input type="text" id="option2" />
        </div>
        <div className="option">
          <label htmlFor="option3">Opção 3:</label>
          <input type="text" id="option3" />
        </div>
        <div className="option">
          <label htmlFor="option4">Opção 4:</label>
          <input type="text" id="option4" />
        </div>
        <div className="option">
          <label htmlFor="option5">Opção 5:</label>
          <input type="text" id="option5" />
        </div>
        <button>Criar pergunta</button>
      </form>
    </div>
  );
};

export default AskQuestion;

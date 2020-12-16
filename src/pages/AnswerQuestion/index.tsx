import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

interface ParamTypes {
  questionId: string;
}

const AnswerQuestion: React.FC = () => {
  const { questionId } = useParams<ParamTypes>();

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
      <h2>Qual sua comida favorita?</h2>
      <div className="question-options">
        <button>Opção 1</button>
        <button>Opção 2</button>
        <button>Opção 3</button>
        <button>Opção 4</button>
        <button>Opção 5</button>
      </div>
    </div>
  );
};

export default AnswerQuestion;

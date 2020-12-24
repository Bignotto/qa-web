import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link, useHistory } from "react-router-dom";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import api from "../../services/api";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.svg";

const AskQuestion: React.FC = () => {
  const question = localStorage.getItem("question");

  const [fingerprint, setFingerprint] = useState("");

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");

  const history = useHistory();

  useEffect(() => {
    FingerprintJS.load().then((agent) => {
      agent.get().then((result) => {
        setFingerprint(result.visitorId);
      });
    });
  }, [fingerprint]);

  function handleOption1Change(event: ChangeEvent<HTMLInputElement>) {
    setOption1(event.target.value);
  }

  function handleOption2Change(event: ChangeEvent<HTMLInputElement>) {
    setOption2(event.target.value);
  }

  function handleOption3Change(event: ChangeEvent<HTMLInputElement>) {
    setOption3(event.target.value);
  }

  function handleOption4Change(event: ChangeEvent<HTMLInputElement>) {
    setOption4(event.target.value);
  }
  function handleOption5Change(event: ChangeEvent<HTMLInputElement>) {
    setOption5(event.target.value);
  }

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = {
        user_id: fingerprint,
        text: question,
        option_1: option1,
        option_2: option2,
        option_3: option3,
        option_4: option4,
        option_5: option5,
      };

      try {
        await api.post("questions", formData).then((response) => {
          history.push(`/result/${response.data.easy_id}`);
        });
      } catch (error) {
        console.log(fingerprint, formData, error.response);
      }
    },
    [
      history,
      fingerprint,
      question,
      option1,
      option2,
      option3,
      option4,
      option5,
    ]
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
          <label htmlFor="option_1">Opção 1:</label>
          <input
            type="text"
            id="option_1"
            name="option_1"
            onChange={handleOption1Change}
            value={option1}
          />
        </div>
        <div className="option">
          <label htmlFor="option_2">Opção 2:</label>
          <input
            type="text"
            id="option_2"
            name="option_2"
            onChange={handleOption2Change}
            value={option2}
          />
        </div>
        <div className="option">
          <label htmlFor="option_3">Opção 3:</label>
          <input
            type="text"
            id="option_3"
            name="option_3"
            onChange={handleOption3Change}
            value={option3}
          />
        </div>
        <div className="option">
          <label htmlFor="option_4">Opção 4:</label>
          <input
            type="text"
            id="option_4"
            name="option_4"
            onChange={handleOption4Change}
            value={option4}
          />
        </div>
        <div className="option">
          <label htmlFor="option_5">Opção 5:</label>
          <input
            type="text"
            id="option_5"
            name="option_5"
            onChange={handleOption5Change}
            value={option5}
          />
        </div>
        <button>{fingerprint ? "Criar Pergunta" : "Aguarde..."}</button>
      </form>
    </div>
  );
};

export default AskQuestion;

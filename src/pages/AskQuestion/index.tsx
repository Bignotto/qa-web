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

interface NewQuestion {
  user_id: string;
  text: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  option_5?: string;
}

const AskQuestion: React.FC = () => {
  const question = localStorage.getItem("question");

  const history = useHistory();

  const [fingerprint, setFingerprint] = useState("");

  const [formData, setFormData] = useState<NewQuestion>({
    user_id: "thiago",
    text: question || "erro",
  });

  useEffect(() => {
    FingerprintJS.load().then((agent) => {
      agent.get().then((result) => {
        setFingerprint(result.visitorId);
        setFormData({ ...formData, user_id: result.visitorId });
      });
    });
  }, [formData]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await api.post("questions", formData);
      } catch (error) {
        console.log(formData, error.response);
      }

      history.push("/result");
    },
    [history, formData]
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

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
            onChange={handleInputChange}
          />
        </div>
        <div className="option">
          <label htmlFor="option_2">Opção 2:</label>
          <input
            type="text"
            id="option_2"
            name="option_2"
            onChange={handleInputChange}
          />
        </div>
        <div className="option">
          <label htmlFor="option_3">Opção 3:</label>
          <input
            type="text"
            id="option_3"
            name="option_3"
            onChange={handleInputChange}
          />
        </div>
        <div className="option">
          <label htmlFor="option_4">Opção 4:</label>
          <input
            type="text"
            id="option_4"
            name="option_4"
            onChange={handleInputChange}
          />
        </div>
        <div className="option">
          <label htmlFor="option_5">Opção 5:</label>
          <input
            type="text"
            id="option_5"
            name="option_5"
            onChange={handleInputChange}
          />
        </div>
        <button>{fingerprint ? "Criar Pergunta" : "Aguarde..."}</button>
      </form>
    </div>
  );
};

export default AskQuestion;

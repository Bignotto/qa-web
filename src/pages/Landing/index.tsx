import React, { useCallback, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.svg";

interface AnserQuestion {
  questionId: string;
}

const Landing: React.FC = () => {
  const [answerData, setAnswerData] = useState<AnserQuestion>({
    questionId: "initial value",
  });

  const history = useHistory();

  const outrobotao = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(answerData);
    },
    [answerData]
  );

  function handleQuestionIdChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setAnswerData({ questionId: event.target.value });
  }

  const handleAnswer = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(answerData);
      history.push(`/answer/${answerData.questionId}`);
    },
    [history]
  );

  return (
    <div id="page-landing">
      <header>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
      </header>
      <form onSubmit={outrobotao}>
        <div className="field">
          <label htmlFor="name">Faça uma pergunta</label>
          <textarea
            name="question"
            id="question"
            onChange={handleQuestionIdChange}
          />
        </div>
        <button type="submit">Perguntar</button>
      </form>
    </div>
  );
};

export default Landing;

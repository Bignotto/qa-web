import React, { useCallback, useState, ChangeEvent, FormEvent } from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Container, Content, QuestionForm } from "./styles";

import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";

interface AnserQuestion {
  questionId: string;
}

const Landing: React.FC = () => {
  const [answerData, setAnswerData] = useState<AnserQuestion>({
    questionId: "initial value",
  });

  const history = useHistory();

  const outrobotao = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(answerData);
  }, []);

  function handleQuestionIdChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setAnswerData({ questionId: event.target.value });
    console.log(answerData);
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
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
        <p>{answerData.questionId}</p>
        <QuestionForm onSubmit={outrobotao}>
          <TextArea name="questionText" placeholder="Faça uma pergunta" />
          <Button type="submit">Perguntar</Button>
        </QuestionForm>
        <QuestionForm onSubmit={handleAnswer}>
          <h3>Responda a uma pergunta:</h3>
          <Input
            name="questionId"
            label="Question"
            type="text"
            placeholder="Código da pergunta"
            onChange={handleQuestionIdChange}
          />
          <Button type="submit">Respnder</Button>
        </QuestionForm>
      </Content>
    </Container>
  );
};

export default Landing;

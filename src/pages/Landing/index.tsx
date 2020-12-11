import React, { useCallback, useState, ChangeEvent, FormEvent } from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Container, Content, QuestionForm } from "./styles";

import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";

const Landing: React.FC = () => {
  const [question_id, setQuestion_id] = useState("");

  const history = useHistory();

  const outrobotao = useCallback((event: FormEvent<HTMLFormElement>) => {
    console.log(question_id);
  }, []);

  const handleAnswer = useCallback(() => {
    history.push(`/answer/${question_id}`);
  }, [history]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
        <p>{question_id}</p>
        <QuestionForm onSubmit={outrobotao}>
          <TextArea name="questionText" placeholder="Faça uma pergunta" />
          <Button type="submit">Perguntar</Button>
        </QuestionForm>
        <QuestionForm onSubmit={handleAnswer}>
          <h3>Responda a uma pergunta:</h3>
          <Input
            name="questionId"
            placeholder="Código da pergunta"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setQuestion_id(event.target.value);
              console.log(question_id);
            }}
            value={question_id}
          />
          <Button type="submit">Respnder</Button>
        </QuestionForm>
      </Content>
    </Container>
  );
};

export default Landing;

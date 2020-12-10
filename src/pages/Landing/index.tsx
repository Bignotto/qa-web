import React, { useCallback, useState } from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Container, Content, QuestionForm } from "./styles";

import logo from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";

const Landing: React.FC = () => {
  const history = useHistory();

  const [question_id, setQuestion_id] = useState<string | null>("");

  const handleAnswer = useCallback(() => {
    history.push(`/answer/${question_id}`);
  }, [history]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
        <QuestionForm>
          <TextArea name="bio" placeholder="Faça uma pergunta" />
          <Button type="submit">Perguntar</Button>
        </QuestionForm>
        <QuestionForm onSubmit={handleAnswer}>
          <h3>Responda a uma pergunta:</h3>
          <Input
            name="question_id"
            placeholder="Código da pergunta"
            onChange={(e) => setQuestion_id(e.target.textContent)}
          />
          <Button type="submit">Respnder</Button>
        </QuestionForm>
      </Content>
    </Container>
  );
};

export default Landing;

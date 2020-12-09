import React from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Container, Content, QuestionForm } from "./styles";

import logo from "../../assets/logo.svg";

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público</h2>
        <QuestionForm>
          <TextArea name="bio" placeholder="Faça uma pergunta" />
          <Button type="submit">Perguntar</Button>
        </QuestionForm>
        <QuestionForm>
          <h3>Responda a uma pergunta:</h3>
          <Input name="question_id" placeholder="Código da pergunta" />
          <Button type="submit">Respnder</Button>
        </QuestionForm>
      </Content>
    </Container>
  );
};

export default Landing;

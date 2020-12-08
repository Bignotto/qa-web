import React from "react";

import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { Container, Content, QuestionForm } from "./styles";

import logo from "../../assets/logo.svg";

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
        <h2>Questione seu público:</h2>
        <QuestionForm>
          <TextArea name="bio" />
          <Button type="submit">Perguntar</Button>
        </QuestionForm>
      </Content>
    </Container>
  );
};

export default Landing;

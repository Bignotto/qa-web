import React from "react";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="LOGO" />
      </Content>
    </Container>
  );
};

export default Landing;

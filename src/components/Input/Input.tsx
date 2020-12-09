import React, { TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import { Container, InputAreaContainer } from "./styles";
//import "./styles.css";

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <InputAreaContainer>
        <input id={name} {...rest} />
      </InputAreaContainer>
    </Container>
  );
};

export default Textarea;

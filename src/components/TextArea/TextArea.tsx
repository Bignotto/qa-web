import React, { TextareaHTMLAttributes } from "react";
import { Container, TextAreaContainer } from "./styles";
//import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <Container>
        {label && <label htmlFor={name}>{label}</label>}
        <TextAreaContainer>
          <textarea id={name} placeholder="Faça uma pergunta" {...rest} />
        </TextAreaContainer>
      </Container>
    </div>
  );
};

export default Textarea;

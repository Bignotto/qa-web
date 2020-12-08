import styled from "styled-components";

export const Container = styled.div``;

export const TextAreaContainer = styled.div`
  flex: 1;
  width: 100%;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 10px;
  color: #666360;
  & + div {
    margin-top: 10px;
  }
  textarea {
    color: #f4ede8;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

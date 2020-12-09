import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  form {
    width: 100%;
    padding: 5px;
  }
`;

export const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  padding: 5px;

  h3 {
    margin-bottom: 12px;
  }
`;

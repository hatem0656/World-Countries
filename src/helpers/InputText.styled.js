import styled from "styled-components";

const InputText = styled.input`
  padding: 20px;
  padding-left: 50px;
  width: 450px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 7px;
  box-shadow: inherit;
  font-size: 12px;
  color: inherit;
  background-color: inherit;
  font-family: inherit;
  font-weight: 600;

  &::placeholder {
    color: inherit;
    opacity: 0.6;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export default InputText;

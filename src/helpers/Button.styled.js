import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
  padding: ${(props) => props.padding || "initial"};
  border: none;
  border-radius: 5px;
  width: ${(props) => props.width || "initial"};
  font-size: inherit;
  cursor: pointer;
`;

export default ButtonStyled;

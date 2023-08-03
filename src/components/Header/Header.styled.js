import styled from "styled-components";

export const Styledheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 100%;

  h1 {
    font-size: 20px;
    flex: 1;
    font-weight: 800;
  }
  div {
    display: flex;

    align-items: center;
  }
  svg {
    color: inherit;
    font-size: 1.1rem;
    margin-right: 7px;
    cursor: pointer;
    transform: rotateZ(0deg);
    transition: 0.2s;
    &:hover {
      transform: rotateZ(15deg);
    }
  }
  span {
    font-weight: 800;
    display: inline-block;
  }
`;

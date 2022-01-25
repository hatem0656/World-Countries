import styled from "styled-components";

export const Styledheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  h1 {
    font-size: 20px;
    flex: 1;
    font-weight: 800;
  }
  i {
    color: inherit;
    margin-right: 7px;
    cursor: pointer;
    &:hover::before {
      transform: rotateZ(15deg);
    }
    &::before {
      transform: rotateZ(0deg);
      transition: 0.2s;
    }
  }
  span {
    font-weight: 800;
    display: inline-block;
  }
`;

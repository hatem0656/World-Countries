import styled from "styled-components";

const SearchFieldStyled = styled.div`
  position: relative;
  height: fit-content;
  margin: 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
  @media (max-width: 720px) {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-42%);
    left: 20px;
    font-size: 13px;
    color: inherit;
    opacity: 0.7;
  }
`;

export default SearchFieldStyled;

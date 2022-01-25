import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1200px) {
    width: 1320px;
  }
`;

export const ContainerFull = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
`;

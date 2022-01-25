import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const CardTitle = styled.h1`
  padding: 15px 21px;
  margin: 0;
  font-size: 20px;
`;

export const CardDescription = styled.div`
  padding: 0 20px 40px;
  font-size: 14px;
  span {
    font-weight: 600;
  }
`;

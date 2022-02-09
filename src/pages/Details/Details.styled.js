import styled from "styled-components";
import Flex from "../../helpers/Flex.styled";

export const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  font-size: 12px;
  margin-bottom: 60px;
  margin-left: 10px;
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 28px;
    font-size: 15px;
    color: inherit;
    margin-right: 10px;
  }
  i::before {
    font-weight: 800 !important;
  }
`;

export const DetailsContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-left: 10px;
  @media (min-width: 992px) {
    justify-content: start;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  img {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }
`;

export const DetailsSection = styled.section`
  width: 400px;
  font-size: 14px;
  margin-left: 5px;
  margin-top: 5px;
  h2 {
    margin-bottom: 20px;
    font-size: 25px;
  }

  section div {
    margin-bottom: 5px;
  }

  span {
    font-weight: 600;
  }

  @media (min-width: 992px) {
    margin-left: 70px;
  }

  @media (min-width: 1200px) {
    margin-left: 80px;
    margin-top: 10px;
    font-size: 16px;
    h2 {
      font-size: 30px;
    }
  }
`;
export const InfoWrapper = styled(Flex)`
  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    & > section:first-child {
      margin-bottom: 20px;
      width: 100%;
    }
  }
`;

export const BorderCountries = styled.div`
  margin-top: 15px;

  & > div {
    font-size: 12px;
    width: 250px;
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    & > div {
      display: inline-flex;
      margin-left: 5px;
    }
  }
`;
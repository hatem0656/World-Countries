import { Container } from "../../helpers/Container.styled";
import ButtonStyled from "../../helpers/Button.styled";
import {
  DetailsContainer,
  ButtonWrapper,
  ImageWrapper,
  DetailsSection,
  InfoWrapper,
  BorderCountries,
} from "./Details.styled";

import flag from "./eg.png";
const Details = () => {
  return (
    <Container>
      <ButtonWrapper>
        <ButtonStyled padding="10px 30px 10px 50px">Back</ButtonStyled>
        <i className="bi bi-arrow-left"></i>
      </ButtonWrapper>
      <DetailsContainer>
        <ImageWrapper>
          <img src={flag} alt="flag" />
        </ImageWrapper>
        <DetailsSection>
          <h2>Egypt</h2>
          <InfoWrapper>
            <section>
              <div>
                <span>Population: </span> 100,00,00
              </div>
              <div>
                <span>Region: </span> Africa
              </div>
              <div>
                <span>Capital: </span> Cairo
              </div>
              <div>
                <span>Capital: </span> Cairo
              </div>
              <div>
                <span>Capital: </span> Cairo
              </div>
            </section>
            <section>
              <div>
                <span>Population: </span> 100,00,00
              </div>
              <div>
                <span>Region: </span> Africa
              </div>
              <div>
                <span>Capital: </span> Cairo
              </div>
            </section>
          </InfoWrapper>
          <BorderCountries>
            <span>Border Countries: </span>
            <div>
              <ButtonStyled padding="3px 20px">Sudan</ButtonStyled>
              <ButtonStyled padding="3px 20px">Lebya</ButtonStyled>
              <ButtonStyled padding="3px 20px">Saudi</ButtonStyled>
            </div>
          </BorderCountries>
        </DetailsSection>
      </DetailsContainer>
    </Container>
  );
};

export default Details;

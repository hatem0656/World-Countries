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
import { Link } from "react-router-dom";
import axios from "axios";
import addCommas from "../../utilts/addCommas";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  // const { id } = useParams();
  const location = useLocation();
  const { country } = location.state;
  const [borderCountries, setBorderCountries] = useState(null);
  useEffect(() => {
    if (country.borders) {
      axios
        .get(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.toString()}`
        )
        .then((response) => {
          setBorderCountries(response.data);
        })
        .catch(() => null);
    }
  }, [country]);
  return (
    <Container>
      <Link to="/">
        <ButtonWrapper>
          <ButtonStyled padding="10px 30px 10px 50px">Back</ButtonStyled>
          <i className="bi bi-arrow-left"></i>
        </ButtonWrapper>
      </Link>
      {country && (
        <DetailsContainer>
          {/* {!loading && console.log(borderCountries)} */}
          <ImageWrapper>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
          </ImageWrapper>
          <DetailsSection>
            <h2>{country.name.common}</h2>
            <InfoWrapper>
              <section>
                <div>
                  <span>Native Name: </span>
                  {Object.values(country.name.nativeName)[0].common}
                </div>
                <div>
                  <span>Population: </span> {addCommas(country.population)}
                </div>
                <div>
                  <span>Region: </span> {country.region}
                </div>
                <div>
                  <span>Sub Region: </span> {country.subregion}
                </div>
                <div>
                  <span>Capital: </span> {country.capital}
                </div>
              </section>
              <section>
                <div>
                  <span>Top Level Domain: </span> {country.tld[0]}
                </div>
                <div>
                  <span>Currencies: </span>
                  {Object.values(country.currencies)[0].name}
                </div>
                <div>
                  <span>Languages: </span>
                  {Object.values(country.languages).join(",")}
                </div>
              </section>
            </InfoWrapper>
            <BorderCountries>
              <span>Border Countries: </span>
              {!borderCountries && <span>No border countries</span>}
              {borderCountries &&
                borderCountries.map((country) => (
                  <ButtonStyled padding="5px 10px" key={country.cca3}>
                    <Link
                      to={{
                        pathname: `/details/${country.name.common}`,
                        state: {
                          country,
                        },
                      }}
                    >
                      {country.name.common}
                    </Link>
                  </ButtonStyled>
                ))}
            </BorderCountries>
          </DetailsSection>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default Details;

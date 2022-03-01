import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
} from "./Card.styled";
import useCard from "./useCard";
import { Link } from "react-router-dom";
import addCommas from "../../utilts/addCommas";

const Card = ({ id, country }) => {
  const { visiable } = useCard(country.region, country.name.common);

  return (
    visiable && (
      <CardContainer id={id} key={id}>
        <CardImage>
          <img src={country.flags.png} alt="country flag" />
        </CardImage>
        <CardTitle>
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
        </CardTitle>
        <CardDescription>
          <div>
            <span>Population: </span> {addCommas(country.population)}
          </div>
          <div>
            <span>Region: </span> {country.region}
          </div>
          <div>
            <span>Capital: </span> {country.capital}
          </div>
        </CardDescription>
      </CardContainer>
    )
  );
};

export default Card;

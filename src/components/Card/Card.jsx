import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
} from "./Card.styled";
import flag from "./eg.png";

const Card = () => {
  return (
    <CardContainer>
      <CardImage>
        <img src={flag} alt="country" />
      </CardImage>
      <CardTitle>Egypt</CardTitle>
      <CardDescription>
        <div>
          <span>Population: </span> 100,00,00
        </div>
        <div>
          <span>Region: </span> Africa
        </div>
        <div>
          <span>Capital: </span> Cairo
        </div>
      </CardDescription>
    </CardContainer>
  );
};

export default Card;

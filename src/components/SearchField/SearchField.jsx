import InputText from "../../helpers/InputText.styled";
import SearchFieldStyled from "./SearchField.styled";

const SearchField = () => {
  return (
    <SearchFieldStyled>
      <InputText type="text" placeholder="Search for a country" />
      <i className="bi bi-search"></i>
    </SearchFieldStyled>
  );
};

export default SearchField;

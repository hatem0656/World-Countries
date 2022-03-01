import InputText from "../../helpers/InputText.styled";
import SearchFieldStyled from "./SearchField.styled";
import useSearchField from "./useSearchField";

const SearchField = () => {
  const [changeText] = useSearchField();
  return (
    <SearchFieldStyled>
      <InputText
        type="text"
        placeholder="Search for a country"
        onChange={(event) => changeText(event)}
      />
      <i className="bi bi-search"></i>
    </SearchFieldStyled>
  );
};

export default SearchField;

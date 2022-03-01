import { useDispatch } from "react-redux";
import { setSearch } from "../../features/search";

function useSearchField() {
  const dispatch = useDispatch();

  const changeText = (event) => dispatch(setSearch(event.target.value));

  return [changeText];
}

export default useSearchField;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../../features/region";

function useDropdown() {
  const [collapse, setCollapse] = useState(true);
  const dispatch = useDispatch();

  const toggleList = () => setCollapse(!collapse);

  const changeRegion = (region) => dispatch(setRegion(region));

  return [collapse, toggleList, changeRegion];
}

export default useDropdown;

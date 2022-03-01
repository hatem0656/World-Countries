import { Regions } from "../../helpers/Constants";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItems,
} from "./Dropdown.styled";
import useDropdown from "./useDropdown";

const Dropdown = () => {
  const [collapse, toggleList, changeRegion] = useDropdown();

  return (
    <DropdownContainer>
      <DropdownHeader>
        Filter by region
        <i className="bi bi-chevron-down" onClick={toggleList}></i>
      </DropdownHeader>
      <DropdownItems collapse={collapse}>
        {Regions.map((region, index) => (
          <li
            id={index}
            key={index}
            onClick={() => {
              changeRegion(region);
              toggleList();
            }}
          >
            {region}
          </li>
        ))}
      </DropdownItems>
    </DropdownContainer>
  );
};

export default Dropdown;

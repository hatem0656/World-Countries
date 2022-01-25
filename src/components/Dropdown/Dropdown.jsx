import {
  DropdownContainer,
  DropdownHeader,
  DropdownItems,
} from "./Dropdown.styled";

const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownHeader>
        Filter by region
        <i className="bi bi-chevron-down"></i>
      </DropdownHeader>
      <DropdownItems>
        <li>Asia</li>
        <li>Africa</li>
        <li>Europe</li>
      </DropdownItems>
    </DropdownContainer>
  );
};

export default Dropdown;

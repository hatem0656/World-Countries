import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 1020;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const DropdownHeader = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  position: relative;
  padding: 15px 20px;
  width: 200px;
  border-radius: 5px;
  line-height: 1.5;
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-38%);
    right: 14px;
    font-size: 11px;
    color: inherit;
    cursor: pointer;
  }
`;

export const DropdownItems = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 200px;
  margin-top: 5px;
  padding: 5px 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px hsl(0deg 0% 52% / 24%);

  li {
    display: block;
    width: 100%;
    padding: 7px 20px;
    cursor: pointer;
  }
  li:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
  li::selection {
    color: inherit;
    background-color: inherit;
  }
  ${(props) => {
    if (props.collapse) return `display: none ;`;
    else return `display: block ;`;
  }}
`;

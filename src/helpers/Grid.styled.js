import styled from "styled-components";

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  margin: ${(props) => props.margin || "initial"};
  width: ${(props) => props.width || "initial"};

  @media (min-width: 510px) {
    grid-column-gap: calc(100% - (250px * 2));
  }
  @media (min-width: 992px) {
    grid-column-gap: calc((100% - (250px * 3)) / 2);
  }
  @media (min-width: 1200px) {
    grid-column-gap: calc((100% - (250px * 4)) / 3);
  }
`;

export default Grid;

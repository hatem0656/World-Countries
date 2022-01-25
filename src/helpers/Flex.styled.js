import styled from "styled-components";

export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.margin || "initial"};
  width: ${(props) => props.width || "initial"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
`;

export default Flex;

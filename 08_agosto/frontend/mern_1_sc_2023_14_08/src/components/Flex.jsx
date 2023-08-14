import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;

export default Flex;
import { styled } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.cols ? props.cols : "1")},
    1fr
  );
  grid-auto-rows: auto;
  gap: 20px;
  padding: 20px;
`;

export default Grid;

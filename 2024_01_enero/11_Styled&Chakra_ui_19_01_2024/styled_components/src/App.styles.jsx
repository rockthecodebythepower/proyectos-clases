import styled from "styled-components";

//! a partir de aquí van mis styled components
export const MiDivGuapo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 300px;
  transition: all 0.5s;

  &:hover {
    background-color: blue;
  }

  & span {
    color: pink;
  }
`;

export const Titulo = styled.h1`
  user-select: none;
  color: ${(props) => props.$colorProp};
  text-decoration: ${(props) => (props.$underlined ? "underline" : "none")};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Flex2 = styled(Flex)`
  flex-direction: row;
`;

import { styled } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export default Title;

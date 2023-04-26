import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  gap: 1rem;
  background-color:${props => props.theme.backgroundColor};
`
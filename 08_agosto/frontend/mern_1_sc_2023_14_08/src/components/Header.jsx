import { styled } from "styled-components";
import Title from "./Title";

const StyledHeader = styled.header`
  display: grid;
  place-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Styled Components</Title>
    </StyledHeader>
  );
};

export default Header;

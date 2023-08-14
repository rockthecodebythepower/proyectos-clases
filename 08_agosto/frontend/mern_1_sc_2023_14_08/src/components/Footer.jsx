import { styled } from "styled-components";
import Text from "./Text";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Text primary>Rock the Code - Styled Components</Text>
    </StyledFooter>
  );
};

export default Footer;

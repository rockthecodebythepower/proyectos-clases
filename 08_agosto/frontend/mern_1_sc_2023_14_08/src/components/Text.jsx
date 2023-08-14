import { styled } from "styled-components";

const Text = styled.p`
  color: ${(props) =>
    props.primary ? "#FFFFFF" : props.secondary ? "#444648" : "#929292"};
  letter-spacing: 2px;
  text-align: ${(props) =>
    props.center ? "center" : props.justify ? "justify" : "left"};
`;

export default Text;

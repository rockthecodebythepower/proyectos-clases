import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#ffffa1" : "#ff983f")};
  border-radius: 12px;
  color: ${(props) => (props.primary ? "black" : "#f5f5f5")};
  font-weight: 600;
  border: none;
  width: fit-content;
  height: fit-content;
  padding: 10px 14px;

  &:hover {
    background-color: #f5f5f5;
    color: #ff983f;
  }
`;

const Button = ({ children, primary, action }) => {
  return (
    <StyledButton primary={primary} onClick={action}>
      {children}
    </StyledButton>
  );
};

export default Button;

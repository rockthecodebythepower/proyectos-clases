import styled from "styled-components"
import Title from "./Title"
import Logo from "./Logo"
import logo from "../assets/logo.svg"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Lorem Picsum Logo" />
      <Title>Picsum</Title>
    </StyledHeader>
  )
}

export default Header

import styled from "styled-components"
import Paragraph from "./Paragraph"

const StyledFooter = styled.footer`
  background-color: black;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph>Created by Rock the Code</Paragraph>
    </StyledFooter>
  )
}

export default Footer

import styled from "styled-components"

const StyledParagraph = styled.p`
  letter-spacing: 5px;
`

const Paragraph = ({children}) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph

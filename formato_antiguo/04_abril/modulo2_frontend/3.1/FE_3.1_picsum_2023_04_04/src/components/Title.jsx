import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size: 2.2rem;
`

const Title = ({children}) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title

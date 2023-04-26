import styled from "styled-components"

const StyledLogo = styled.img`
  height: 5vh;
`

const Logo = ({src, alt}) => {
  return <StyledLogo src={src} alt={alt} loading="lazy" />
}

export default Logo

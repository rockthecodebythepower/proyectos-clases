import styled from "styled-components"

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Image = ({img}) => {
  return <StyledImage src={img.download_url} alt={img.author} loading="lazy" />
}

export default Image

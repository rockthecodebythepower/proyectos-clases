import styled from "styled-components"

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  padding: 2rem;
  gap: 1rem;
  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  img:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  img:nth-child(12) {
    grid-column: 5/7;
    grid-row: 3/5;
  }

  img:nth-child(13) {
    grid-column: 1/3;
    grid-row: 5/7;
  }

  @media screen and (max-width: 800px) {
    img:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
    }

    img:nth-child(5) {
      grid-column: 2/4;
      grid-row: 3/5;
    }

    img:nth-child(12) {
      grid-column: 2/4;
      grid-row: 7/9;
    }
  }
`

const GalleryLayout = ({children}) => {
  return <StyledGallery>{children}</StyledGallery>
}

export default GalleryLayout

import {useState, useEffect} from "react"
import {fetchImages} from "../utils/fetchImages"
import Image from "./Image"
import GalleryLayout from "../layout/GalleryLayout"
import ButtonNextPrev from "./ButtonNextPrev"
import Loading from "./Loading"
import styled from "styled-components"

const Main = () => {
  const [numPage, setNumPage] = useState(1)
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    fetchImages(numPage).then((res) => {
      setImages(res)
      //Esto es una ñapa pero es para que veáis como funcionan estas cosas
      setTimeout(() => {
        setLoaded(true)
      }, 3000)
    })
  }, [numPage])

  const prevPage = () => {
    setNumPage(numPage - 1)
  }

  const nextPage = () => {
    setNumPage(numPage + 1)
  }

  const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `

  return (
    <StyledMain>
      {numPage > 1 ? <ButtonNextPrev text="Prev" action={prevPage} /> : ""}
      {numPage <= 20 ? <ButtonNextPrev text="Next" action={nextPage} /> : ""}
      <GalleryLayout>
        {loaded ? (
          images.map((img) => <Image key={img.id} img={img} />)
        ) : (
          <Loading />
        )}
      </GalleryLayout>
    </StyledMain>
  )
}

export default Main

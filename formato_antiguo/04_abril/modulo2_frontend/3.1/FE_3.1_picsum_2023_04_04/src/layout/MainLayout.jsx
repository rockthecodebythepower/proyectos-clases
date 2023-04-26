import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
`

const MainLayout = ({children}) => {
  return <Wrapper>{children}</Wrapper>
}

export default MainLayout

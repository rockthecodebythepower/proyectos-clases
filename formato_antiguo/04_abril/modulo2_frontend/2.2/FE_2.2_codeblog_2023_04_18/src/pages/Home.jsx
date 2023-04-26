import {posts} from "../posts"
import {NavLink} from "react-router-dom"
import PostPreview from "../components/PostPreview"
import styled from "styled-components"

const HomeStyled = styled.main`
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Home = () => {
  return (
    <HomeStyled>
      {posts.map((post) => (
        <NavLink to={`/post/${post.file}`} key={post.id}>
          <PostPreview post={post} />
        </NavLink>
      ))}
    </HomeStyled>
  )
}

export default Home

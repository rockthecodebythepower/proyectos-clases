import {useState, useEffect} from "react"
import Markdown from "markdown-to-jsx"
import Code from "./Code"
import styled from "styled-components"

const PostStyled = styled.div`
  padding: 2rem;
  background-color: var(--background-post);
  margin: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 10px black;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const Post = ({title}) => {
  const [postContent, setPostContent] = useState("")
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    import(`../posts/${title}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err))
    )
    console.log(postContent)
  }, [])

  return (
    <PostStyled>
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
              props: {
                isDark,
                setIsDark,
              },
            },
          },
        }}
      >
        {postContent}
      </Markdown>
    </PostStyled>
  )
}

export default Post

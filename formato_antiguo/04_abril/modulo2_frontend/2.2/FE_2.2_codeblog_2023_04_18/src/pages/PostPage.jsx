import {useParams} from "react-router-dom"
import Post from "../components/Post"

const PostPage = () => {
  const {title} = useParams()

  return (
    <main>
      <Post title={title} />
    </main>
  )
}

export default PostPage

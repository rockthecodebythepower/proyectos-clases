import DateFormat from "./DateFormat"
import styled from "styled-components"

const PostPreviewStyled = styled.figure`
  display: flex;
  flex-direction: column;
  background-color: var(--background-post);
  padding: 2rem 1rem;
  transition: all 0.5s ease-in-out;
  gap: 1rem;
  div {
    display: flex;
    gap: 1rem;
  }
  h4 {
    font-size: 0.8rem;
  }
  .date {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .date span {
    transform: scale(1);
  }
  :hover {
    background-color: var(--primary);
    color: var(--background);
  }
  span {
    color: var(--secondary);
    transform: scale(1.4);
  }
`

const PostPreview = ({post}) => {
  return (
    <PostPreviewStyled data-testid="postPreview">
      <div>
        <span
          data-testid="postPreviewspan"
          className="material-symbols-outlined"
        >
          {post.tech}
        </span>
        <h3 data-testid="postPreviewh3">{post.title}</h3>
      </div>
      <DateFormat iso={post.date} />
    </PostPreviewStyled>
  )
}

export default PostPreview

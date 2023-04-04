import styled from "styled-components"

const StyledLoading = styled.div`
  background-color: none;
  border-radius: 50%;
  border: 20px solid black;
  position: relative;
  animation: rotate 3s linear infinite;

  &::after {
    content: "";
    background-color: whitesmoke;
    position: absolute;
    top: 0;
    transform: rotate(-50deg);
    padding: 20px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(800deg);
    }
  }
`

const Loading = () => {
  return <StyledLoading />
}

export default Loading

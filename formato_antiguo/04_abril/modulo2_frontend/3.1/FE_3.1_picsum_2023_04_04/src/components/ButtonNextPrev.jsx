import styled from "styled-components"

const StyledButton = styled.button`
  border: 2.5px solid black;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-weight: 700;
`

const ButtonNextPrev = ({action, text}) => {
  return <StyledButton onClick={() => action()}>{text}</StyledButton>
}

export default ButtonNextPrev

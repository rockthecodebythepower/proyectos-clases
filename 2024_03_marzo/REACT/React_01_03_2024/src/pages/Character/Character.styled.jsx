import styled from "styled-components"
import { Flex } from "../../generalStyledComponents"

export const CharacterPage = styled(Flex) `
    background-color: aliceblue;
    min-height: 100svh;
`

export const CharacterWrp = styled(Flex) `
    flex-direction: column;
`

export const ImgWrp = styled.div `
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
`

export const CharacterImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const CharacterName = styled.h3 `
    text-align: center;
`
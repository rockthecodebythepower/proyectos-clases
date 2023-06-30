import { styled } from "styled-components";

export const MainWrp = styled.div `

`;

export const Title = styled.h1 `
    text-align: center;
    transition: all, 1s;

    &:hover {
        color: var(--secondary);
    }
`

export const Select = styled.select `
    padding: 10px 15px;
    border-radius: 20px;
    background-color: var(--text);
    font-weight: bold;
    border: none;
    cursor: pointer;
`

export const Option = styled.option `

`
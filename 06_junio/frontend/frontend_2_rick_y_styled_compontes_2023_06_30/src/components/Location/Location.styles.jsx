import { styled } from "styled-components";

export const LocationWrp = styled.div `
    background-image: ${({$imagen}) => `url(${$imagen})`};
    width: 300px;
    height: 400px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    border-radius: 20px;
    position: relative;
`;

export const LocationName = styled.h3 `
    text-align: center;
`;

export const LocationDimension = styled(LocationName) `
    color: var(--primary);
`
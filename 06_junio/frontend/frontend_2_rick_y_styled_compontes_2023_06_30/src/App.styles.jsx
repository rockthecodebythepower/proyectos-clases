import { styled } from 'styled-components';

export const AppWrp = styled.div `
  background-color: var(--background);
  width: ${({$w}) => $w};
  min-height: 100svh;
  padding: 30px;
`
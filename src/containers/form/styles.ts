import styled, { keyframes } from 'styled-components'

const gradient = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

export const BackgroundHighlight = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1180px;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, #DB00FF, #AD00FF, #6812B5, #8700FF, #3F3CC0 );
  background-size: 600% 100%;
  filter: blur(10px);
  animation: ${gradient} 5s infinite;
`


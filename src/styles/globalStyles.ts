import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }


  body, input, textarea, button{
    font-size: 1rem;
    font-weight: 400;
  }

`

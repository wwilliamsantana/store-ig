import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      border: 0;
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.backgorund};
  }


  body, input, textarea, button{
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

`

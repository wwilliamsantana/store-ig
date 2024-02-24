import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CardContextProvider } from './context/CardContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardContextProvider>
          <Router />
        </CardContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

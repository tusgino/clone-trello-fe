import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@emotion/react'
import { Experimental_CssVarsProvider as CssVarsProviders } from '@mui/material/styles'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Use CssVarsProviders then require use with ExtendTheme */}
    <CssVarsProviders theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProviders>
  </React.StrictMode>
)

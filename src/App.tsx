import Container from '@mui/material/Container'
import ModeToggle from './ModeToggle'
import Box from '@mui/material/Box'
// import { useMediaQuery } from '@mui/material'

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  return (
    // disableGutters: remove padding left and right
    // maxWidth={false}: remove maxWidth
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeToggle />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boardHeaderHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardHeaderHeight})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Board Content
      </Box>
    </Container>
  )
}

export default App

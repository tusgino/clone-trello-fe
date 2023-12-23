import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import Typography from '@mui/material/Typography'

import ModeToggle from './ModeToggle'
// import { useMediaQuery } from '@mui/material'

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  return (
    <>
      <ModeToggle />
      <div className=''>NguyenDinhTu</div>
      <Typography variant='body2' color='text.secondary'>
        body2
      </Typography>
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <ThreeDRotation />
      <AccessAlarm />
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>
    </>
  )
}

export default App

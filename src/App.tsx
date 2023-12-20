import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'

function App() {
  return (
    <>
      <div className=''>NguyenDinhTu</div>
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

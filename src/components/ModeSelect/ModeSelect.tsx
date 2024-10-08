import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

type ModeSelectType = 'light' | 'dark' | 'system'

export default function ModeSelect() {
  // Sử dụng useColorScheme để lấy giá trị mode hiện tại
  // Sử dụng setMode để thay đổi giá trị mode
  const { mode, setMode } = useColorScheme()

  function handleChange(event: SelectChangeEvent) {
    const modeSelected = event.target.value as ModeSelectType
    setMode(modeSelected)
  }

  // return <Button onClick={handleToggleMode}>{mode === 'dark' ? 'Dark' : 'Light'}</Button>
  return (
    <FormControl sx={{ minWidth: 120, color: '#fff' }} size='small'>
      <InputLabel
        id='label-select-dark-light-mode'
        sx={{
          color: '#fff',
          '&.Mui-focused': {
            color: '#fff'
          }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='mode'
        onChange={handleChange}
        sx={{
          color: '#fff',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff'
          },
          '.MuiSelect-icon': {
            color: '#fff'
          }
        }}
      >
        <MenuItem value='light'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

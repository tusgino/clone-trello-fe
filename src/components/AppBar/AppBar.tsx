import { useState } from 'react'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import ModeSelect from '~/components/ModeSelect'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Starred'
import Template from './Menus/Template'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import UserSetting from './Menus/UserSetting'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleClickRemoveSearch = () => {
    setSearchValue('')
  }

  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#ffffff'
        }}
      >
        <AppsIcon />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox />
          <Typography
            variant='body1'
            component={'span'}
            sx={{
              fontWeight: '500',
              fontSize: '1.2rem'
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
              gap: 1
            }
          }}
        >
          <Workspaces />
          <Recent />
          <Started />
          <Template />
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            variant='outlined'
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#fff'
        }}
      >
        <TextField
          id='outlined-search'
          label='Search...'
          type='text'
          size='small'
          value={searchValue}
          onChange={handleChangeSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon
                  sx={{
                    color: '#fff'
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: searchValue && (
              <CloseIcon
                sx={{
                  color: '#fff',
                  cursor: 'pointer'
                }}
                onClick={handleClickRemoveSearch}
              />
            )
          }}
          sx={{
            minWidth: '100px',
            maxWidth: '170px',
            '& label': {
              color: '#fff'
            },
            '& input': {
              color: '#fff'
            },
            '& label.Mui-focused': {
              color: '#fff'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff'
              },
              '&:hover fieldset': {
                borderColor: '#fff'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff'
              }
            }
          }}
        />

        <ModeSelect />
        <Tooltip title='Notifications'>
          <IconButton>
            <Badge color='warning' variant='dot'>
              <NotificationsNoneIcon
                sx={{
                  color: '#fff'
                }}
              />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title='Help'>
          <IconButton>
            <HelpOutlineIcon
              sx={{
                color: '#fff'
              }}
            />
          </IconButton>
        </Tooltip>
        <UserSetting />
      </Box>
    </Box>
  )
}

export default AppBar

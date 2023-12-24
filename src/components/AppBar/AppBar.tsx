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

function AppBar() {
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
        overflowX: 'auto'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'primary.main'
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
          <Button variant='outlined'>Create</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'primary.main'
        }}
      >
        <TextField id='outlined-search' label='Search...' type='search' size='small' sx={{ minWidth: '120px' }} />

        <ModeSelect />
        <Tooltip title='Notifications'>
          <IconButton>
            <Badge color='secondary' variant='dot'>
              <NotificationsNoneIcon
                sx={{
                  color: 'primary.main'
                }}
              />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title='Help'>
          <IconButton>
            <HelpOutlineIcon
              sx={{
                color: 'primary.main'
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

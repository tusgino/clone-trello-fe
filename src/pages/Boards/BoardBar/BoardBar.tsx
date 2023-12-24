import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: '#fff',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'transparent',
  px: '5px',
  '.MuiChip-icon': {
    color: '#fff'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        borderBottom: '1px solid #fff',
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#fff'
        }}
      >
        <Chip icon={<DashboardIcon />} label='Tugino Board' clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLockIcon />} label='Public/ Private Workspace' clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDriveIcon />} label='Add to GG Drive' clickable sx={MENU_STYLES} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#fff'
        }}
      >
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: '#fff',
            '&:hover': {
              borderColor: '#fff'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '32px',
              height: '32px',
              fontSize: '0.875rem',
              border: 'none'
            }
          }}
        >
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Remy Sharp'>
            <Avatar
              alt='Remy Sharp'
              src='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar

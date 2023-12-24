import { useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import ContentCopy from '@mui/icons-material/ContentCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import ArchiveIcon from '@mui/icons-material/Archive'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'

function ExpandMoreButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <IconButton
        id='basic-button-expand-more'
        aria-controls={open ? 'basic-menu-expand-more' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'text.primary' }}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id='basic-menu-expand-more'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-expand-more'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <AddCardIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Add new Card</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize='small' />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant='body2' color='text.secondary'>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize='small' />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant='body2' color='text.secondary'>
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize='small' />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant='body2' color='text.secondary'>
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <DeleteForeverIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Remove this column</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArchiveIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Archive this column</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default ExpandMoreButton

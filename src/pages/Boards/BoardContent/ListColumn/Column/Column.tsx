import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddCardIcon from '@mui/icons-material/AddCard'
import Tooltip from '@mui/material/Tooltip'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreButton from './ExpandMoreButton'
import ListCard from './ListCard'

function Column() {
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        ml: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        width: '100%',
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      {/* Column Header */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Column Title
        </Typography>
        <ExpandMoreButton />
      </Box>

      {/* Column Content */}
      <ListCard />

      {/* Column Footer */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new Card</Button>
        <Tooltip
          title='Drag column'
          sx={{
            cursor: 'pointer'
          }}
        >
          <DragHandleIcon />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column

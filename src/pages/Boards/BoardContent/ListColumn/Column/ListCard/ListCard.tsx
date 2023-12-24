import Box from '@mui/material/Box'
import Card from './Card'

function ListCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.trello.columnHeaderHeight} - ${
            theme.trello.columnFooterHeight
          } - ${theme.spacing(5)})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        },
        p: '0 5px',
        m: '0 5px'
      }}
    >
      <Card temporaryMedia />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  )
}

export default ListCard

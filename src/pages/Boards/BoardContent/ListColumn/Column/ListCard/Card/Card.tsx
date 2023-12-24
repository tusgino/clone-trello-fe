import { Card as MUICard } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Card({ temporaryMedia = false }) {
  if (temporaryMedia)
    return (
      <MUICard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image='https://plus.unsplash.com/premium_photo-1696458316092-4917612139cc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          title='green iguana'
        />
        <CardContent
          sx={{
            p: 1.5,
            '&:last-child': {
              p: 1.5
            }
          }}
        >
          <Typography>Lizard</Typography>
        </CardContent>
        <CardActions
          sx={{
            p: '0 4px 8px 4px'
          }}
        >
          <Button size='small' startIcon={<GroupIcon />}>
            20
          </Button>
          <Button size='small' startIcon={<CommentIcon />}>
            15
          </Button>
          <Button size='small' startIcon={<AttachFileIcon />}>
            5
          </Button>
        </CardActions>
      </MUICard>
    )
  return (
    <MUICard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}
    >
      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}
      >
        <Typography>Lizard</Typography>
      </CardContent>
    </MUICard>
  )
}

export default Card

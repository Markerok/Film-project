import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import DirectionsIcon from '@mui/icons-material/Directions'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Comments = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [value, setValue] = useState('')
  const user = useSelector((state) => state.user.currentUser)

  const getComment = () => {
    axios.post('http://localhost:3001/comments', {
      comment: value,
      filmId: id,
      userId: user._id,
    })
    setComments([...comments, value])
    setValue('')
  }

  return (
    <Box>
      <List
        sx={{
          width: '330px',
          margin: '0 auto',
        }}
      >
        {comments.length === 0 ? (
          <Typography sx={{ textAlign: 'center' }} variant="h3">
            There's no comments
          </Typography>
        ) : (
          comments.map((el) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar src="/broken-image.jpg" />
              </ListItemAvatar>
              <ListItemText primary={'Username'} secondary={el} />
            </ListItem>
          ))
        )}
      </List>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 330,
          margin: '0 auto',
        }}
      >
        <InputBase
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add a comment..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={getComment}
          color="primary"
          sx={{ p: '10px' }}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}

export default Comments

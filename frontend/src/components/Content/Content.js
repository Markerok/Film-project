import { React, useEffect } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { saveMovies } from '../../store/actions'
import { useStyles } from './styles'

function Content() {
  const classes = useStyles()
  let films = useSelector((state) => state.movie)
  const dispatch = useDispatch()

  function getMovies() {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then((response) => response.json())
      .then((json) => dispatch(saveMovies(json.data.movies)))
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container className={classes.container}>
      {films.map((el) => (
        <Card
          className={classes.card}
          raised
          key={el.id}
          sx={{ maxWidth: 230, display: 'inline-flex' }}
        >
          <CardActionArea>
            <CardMedia image={el.medium_cover_image} className={classes.root} />
            <CardContent>
              <Typography
                className={classes.typography}
                gutterBottom
                variant="h6"
              >
                {el.title_english}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  )
}

export default Content

import { React, useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { useStyles } from './styles'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Film = () => {
  const { id } = useParams()
  const classes = useStyles()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => setFilm(response.data.data.movie))
  }, [id])

  return (
    <Container className={classes.container}>
      {film && (
        <Card
          raised
          key={film.id}
          sx={{ maxWidth: 330, display: 'inline-flex' }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.root}
              component="img"
              image={film.medium_cover_image}
              height="400"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6">
                {film.title_long} ({film.rating})
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Category:
                {Array.isArray(film.genres) ? film.genres.join() : 'none'}
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                {film.description_full}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      <Link className={classes.linkContent} to={`/films/${id}/reviews`}>
        <Button
          sx={{ display: 'block', margin: '0 auto' }}
          variant="contained"
          size="medium"
        >
          Reviews
        </Button>
      </Link>
    </Container>
  )
}

export default Film

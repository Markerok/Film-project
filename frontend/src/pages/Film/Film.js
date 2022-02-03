import { React, useEffect, useState } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { useStyles } from './styles'
import { useParams } from 'react-router-dom'

const Film = () => {
  const { id } = useParams()
  const classes = useStyles()
  const [film, setFilm] = useState(null)

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => setFilm(json.data.movie))
  }, [id])

  return (
    <Container className={classes.container}>
      {film && (
        <Card
          className={classes.card}
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
                Category: {film.genres}
              </Typography>
              <Typography>{film.description_full}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Container>
  )
}

export default Film

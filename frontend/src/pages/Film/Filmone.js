import { React, useEffect, useState } from 'react'
import { useStyles } from './moreStyle'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

const FilmOne = () => {
  const classes = useStyles()
  const [film, setFilm] = useState([])

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=39753`)
      .then((response) => response.json())
      .then((json) => setFilm(json.data.movie))
  }, [])

  return (
    <Container sx={{ display: 'grid', gridTemplateColumns: '330px auto' }}>
      <Box>
        <img
          className={classes.img}
          src={film.medium_cover_image}
          alt="main_image"
        />
      </Box>
      <Box>
        <Typography gutterBottom variant="h6">
          {film.title_long} ({film.rating})
        </Typography>
        <Typography gutterBottom variant="h6">
          Genres: {film.genres}
        </Typography>
        <Typography gutterBottom>
          Description: {film.description_full}
        </Typography>
      </Box>
    </Container>
  )
}

export default FilmOne

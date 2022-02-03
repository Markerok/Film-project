import { React, useEffect } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useContentContext from '../../components/ContentContext'
import { useStyles } from './styles'

function Content() {
  const classes = useStyles()

  const { getMovies, searchedValue } = useContentContext()

  const films = useSelector((state) => state.movies)
  const searchedMovies = useSelector((state) => state.searchedMovies)

  const moviesToShow = searchedValue ? searchedMovies : films

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <Container className={classes.container}>
      {moviesToShow.map((el) => (
        <Link
          className={classes.linkContent}
          key={el.id}
          to={`/films/${el.id}`}
        >
          <Card
            className={classes.card}
            raised
            key={el.id}
            sx={{ maxWidth: 230, display: 'inline-flex' }}
          >
            <CardActionArea>
              <CardMedia
                image={el.medium_cover_image}
                className={classes.root}
              />
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
        </Link>
      ))}
    </Container>
  )
}

export default Content

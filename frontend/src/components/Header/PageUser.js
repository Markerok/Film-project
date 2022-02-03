import { React, useEffect, useState } from 'react'
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userReducer'
import { StyledInputBase, Search, SearchIconWrapper } from './styles'
import { useStyles } from '../../pages/Content/styles'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { options } from './constants'
import useContentContext from '../ContentContext'

const PageUser = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')

  const { search } = useContentContext()

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useInput(null)
  const open = Boolean(anchorEl)

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    search(searchValue)
  }, [searchValue, search])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: 'block' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <Button sx={{ my: 1, color: 'white', display: 'box' }}>
              <Link className={classes.linkHeader} to="/films">
                Главная
              </Link>
            </Button>

            <Button
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClickMenu}
              sx={{ my: 1, color: 'white', display: 'box' }}
            >
              Категории
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={handleCloseMenu}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button
            onClick={() => dispatch(logout())}
            color="inherit"
            variant="outlined"
          >
            Log Out
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default PageUser

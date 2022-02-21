import { React, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Container,
  TextField,
  Toolbar,
  Typography,
  Menu,
  ListItem,
  List,
  ListItemText,
  Checkbox,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'

import useInput from '../../hooks/useInput'
import { registration, login } from '../../store/actions'
import useContentContext from '../ContentContext'
import { options } from './constants'
import { StyledInputBase, Search, SearchIconWrapper } from './styles'
import { Link } from 'react-router-dom'
import { useStyles } from '../../pages/Content/styles'

function Header() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { search, searchGenre } = useContentContext()

  const [loginAuth, setLoginAuth] = useInput()
  const [pass, setPass] = useInput()
  const [username, setUsername] = useInput()
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [openAuth, setOpenAuth] = useState(false)
  const [openSign, setOpenSign] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchValueByGenres, setSearchValueByGenres] = useState([])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  const getGenre = (e) => {
    let filterByGenre
    if (e.target.checked) {
      filterByGenre = [...searchValueByGenres, e.target.value]
    } else {
      filterByGenre = searchValueByGenres.filter((el) => el !== e.target.value)
    }
    setSearchValueByGenres(filterByGenre)
    searchGenre(filterByGenre)
  }

  useEffect(() => {
    search(searchValue)
  }, [searchValue, search])

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleClickOpenAuth = () => {
    setOpenAuth(true)
  }

  const handleClickCloseAuth = () => {
    setOpenAuth(false)
  }

  const handleClickOpenSign = () => {
    setOpenSign(true)
  }

  const handleClickCloseSign = () => {
    setOpenSign(false)
  }

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
              <List>
                {options.map((option) => (
                  <ListItem key={option}>
                    <Checkbox
                      checked={searchValueByGenres.includes(option)}
                      onChange={getGenre}
                      value={option}
                    />
                    <ListItemText primary={option} />
                  </ListItem>
                ))}
              </List>
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
            onClick={handleClickOpenAuth}
            color="inherit"
            variant="outlined"
          >
            Log In
          </Button>

          <Dialog
            open={openAuth}
            onClose={handleClickCloseAuth}
            aria-labelledby="form-dialog-title"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
              <DialogContent>
                <TextField
                  {...register('loginAuth', {
                    required: 'Should be filled',
                    minLength: {
                      value: 4,
                      message: 'At least 4 symbols',
                    },
                  })}
                  error={errors?.loginAuth ? true : false}
                  helperText={
                    errors?.loginAuth ? errors?.loginAuth.message : null
                  }
                  color="primary"
                  margin="dense"
                  id="name"
                  label="Log In"
                  type="login"
                  value={loginAuth}
                  onChange={setLoginAuth}
                  fullWidth
                />

                <TextField
                  {...register('passAuth', {
                    required: 'Should be filled',
                    minLength: {
                      value: 6,
                      message: 'At least 6 symbols',
                    },
                  })}
                  error={errors?.passAuth ? true : false}
                  helperText={
                    errors?.passAuth ? errors?.passAuth.message : null
                  }
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  value={pass}
                  onChange={setPass}
                  fullWidth
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickCloseAuth} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={() => dispatch(login(loginAuth, pass))}
                  color="primary"
                >
                  Log In
                </Button>
              </DialogActions>
            </form>
          </Dialog>

          <Button
            color="inherit"
            variant="outlined"
            onClick={handleClickOpenSign}
          >
            Sign up
          </Button>
          <Dialog
            open={openSign}
            onClose={handleClickCloseSign}
            aria-labelledby="form-dialog-title"
          >
            <form
              onSubmit={() =>
                handleSubmit(onSubmit(registration(username, email, password)))
              }
            >
              <DialogTitle id="form-dialog-title">Registration</DialogTitle>
              <DialogContent>
                <TextField
                  {...register('loginReg', {
                    required: 'Should be filled',
                    minLength: {
                      value: 4,
                      message: 'At least 4 symbols',
                    },
                  })}
                  error={errors?.loginReg ? true : false}
                  helperText={
                    errors?.loginReg ? errors?.loginReg.message : null
                  }
                  margin="dense"
                  id="SignUp"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={setUsername}
                  fullWidth
                />

                <TextField
                  {...register('emailReg', {
                    required: 'Should be filled',
                  })}
                  error={errors?.emailReg ? true : false}
                  helperText={
                    errors?.emailReg ? errors?.emailReg.message : null
                  }
                  margin="dense"
                  id="email"
                  label="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  fullWidth
                />

                <TextField
                  {...register('passReg', {
                    required: 'Should be filled',
                    minLength: {
                      value: 6,
                      message: 'At least 6 symbols',
                    },
                  })}
                  error={errors?.passReg ? true : false}
                  helperText={errors?.passReg ? errors?.passReg.message : null}
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  fullWidth
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickCloseSign} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Sign Up
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

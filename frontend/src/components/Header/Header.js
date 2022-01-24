import { React, useState } from 'react'
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
  MenuItem,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

function Header() {
  const options = [
    'боевик',
    'военный',
    'детектив',
    'детский',
    'документальный',
    'драма',
    'исторический',
    'комедия',
    'короткометражный',
    'криминал',
    'мелодрама',
    'мистика',
    'музыка',
    'мультфильм',
    'мюзикл',
    'приключения',
    'семейный',
    'спорт',
    'триллер',
    'ужасы',
    'фантастика',
    'фэнтези',
  ]
  const [loginSign, setLoginSign] = useState('')
  const [emailSign, setEmailSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [openAuth, setOpenAuth] = useState(false)
  const [openSign, setOpenSign] = useState(false)
  const [value, setValue] = useState('')

  // const filteredMovies = films.filter((movie) => {
  //   return movie.title
  //     .toLowerCase()
  //     .includes(StyledInputBase.value.toLowerCase())
  //   console.log(StyledInputBase.value)
  // })

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const {
    register,
    formState: { errors },
  } = useForm()

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

  const onSubmit = async (loginSign, emailSign, passSign) => {
    console.log('clicked')
    console.log(loginSign)
    const res = await fetch('http://localhost:3001/user', {
      method: 'POST',
      body: { loginSign, emailSign, passSign },
    })
    if (!res.ok) {
      console.log(res.status)
    }
    return await res.json()
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
              Главная
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
              value={value}
              onChange={(event) => setValue(event.target.value)}
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
            <form>
              <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
              <DialogContent>
                <TextField
                  color="primary"
                  margin="dense"
                  id="name"
                  label="Log In"
                  type="login"
                  fullWidth
                  {...register('username', {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                />

                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                  {...register('username', {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickCloseAuth} color="primary">
                  Cancel
                </Button>
                <Button onSubmit={onSubmit} type="submit" color="primary">
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
            <form onSubmit={() => onSubmit(loginSign, emailSign, passSign)}>
              <DialogTitle id="form-dialog-title">Registration</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="SignUp"
                  label="Username"
                  type="text"
                  value={loginSign}
                  onChange={(event) => setLoginSign(event.target.value)}
                  fullWidth
                />

                <TextField
                  margin="dense"
                  id="email"
                  label="email"
                  type="email"
                  value={emailSign}
                  onChange={(event) => setEmailSign(event.target.value)}
                  fullWidth
                />

                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  value={passSign}
                  onChange={(event) => setPassSign(event.target.value)}
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

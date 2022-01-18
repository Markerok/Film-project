import { React, useState } from 'react';
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
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import './AuthStyle.css';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const AuthComponent = () => {
  const pages = ['Главная', 'Категории'];
  const [openAuth, setOpenAuth] = useState(false);
  const [openSign, setOpenSign] = useState(false);

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
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleClickOpenAuth = () => {
    setOpenAuth(true);
  };

  const handleClickCloseAuth = () => {
    setOpenAuth(false);
  };

  const handleClickOpenSign = () => {
    setOpenSign(true);
  };

  const handleClickCloseSign = () => {
    setOpenSign(false);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { md: 'block' } }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 1, color: 'white', display: 'box' }}>
                {page}
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Button color="inherit" variant="outlined" onClick={handleClickOpenAuth}>
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

                <TextField margin="dense" id="pass" label="Password" type="password" fullWidth />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickCloseAuth} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleSubmit(onSubmit)} type="submit" color="primary">
                  Log In
                </Button>
              </DialogActions>
            </form>
          </Dialog>

          <Button color="inherit" variant="outlined" onClick={handleClickOpenSign}>
            Sign up
          </Button>
          <Dialog
            open={openSign}
            onClose={handleClickCloseSign}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
            <DialogContent>
              <TextField margin="dense" id="Login" label="Log In" type="text" fullWidth />

              <TextField margin="dense" id="email" label="email" type="email" fullWidth />

              <TextField margin="dense" id="pass" label="Password" type="password" fullWidth />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClickCloseSign} color="primary">
                Cancel
              </Button>
              <Button color="primary">Sign Up</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AuthComponent;

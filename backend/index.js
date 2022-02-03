const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./users/user/router');
const filmRouter = require('./films/film/router');
const roleRouter = require('./role/role/router');
const loginRouter = require('./login/router');
const authRouter = require('./login/authRouter');
const corsMiddleware = require('./middleware/cors.middleware');

const port = 3001;
const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use('/user', userRouter);
app.use('/film', filmRouter);
app.use('/role', roleRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);

mongoose
  .connect(
    'mongodb+srv://user:user@cluster0.khec5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        app.listen(port, () => {
          console.log('server has been started');
        });
      }
    },
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

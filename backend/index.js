const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./users/user/router')
const filmRouter= require('./films/film/router')
const roleRouter= require('./role/role/router')
const loginRouter = require('./login/router')





const port = 3000;
const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/film', filmRouter)
app.use('/role', roleRouter)
app.use('/login', loginRouter)




mongoose.connect('mongodb+srv://user:user@cluster0.namxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err) =>{
    if(err){
        console.log(err)
    }else{
        app.listen(port, ()=>{
            console.log('server has been started')
        })
    }
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))





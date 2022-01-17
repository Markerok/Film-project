const mongoose = require('mongoose');

const Films = new mongoose.Schema({
    film_name:{
        type:String,
        required: true
    },
    year_of_film:{
        type:Number
    },
    rating:{
        type:Number
    },
    director:{
        type: String
    },
    about_film:{
        type:String
    }
})

const FilmsModel = mongoose.model('Films', Films)
module.exports = FilmsModel

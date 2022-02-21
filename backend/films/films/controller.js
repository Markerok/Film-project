const FilmsModel = require('../models/films')

const create = async (req, res) =>{
    const{film_name, year_of_film} = req.body
    const film = await FilmsModel.create({film_name, year_of_film, rating, director, about_film})
    res.status(200).json(film)
}

const readAll = async (req, res) =>{
    const films = await FilmsModel.find()
    res.status(200).json(films)
}

const readById = async (req, res) =>{
    const film = await FilmsModel.findById({__id:'61d86dca37a8edfbc57c12d7'})
    res.status(200).json(film)
}
const updateByID = async (req, res) =>{
    const film = await FilmsModel.updateOne({name:"Hulk", year_of_film: 2020})
    res.status(200).json(film)
}
const deleteAll = async (req, res) =>{
    const films = await FilmsModel.deleteMany()
    res.status(200).json(films)
}
const deleteById = async (req, res) =>{
    const film = await FilmsModel.deleteById({__id:'61d86dca37a8edfbc57c12d7'})
    res.status(200).json(film)
}

exports.create = create
exports.readAll = readAll
exports.readById = readById
exports.updateByID = updateByID
exports.deleteAll = deleteAll
exports.deleteById = deleteById

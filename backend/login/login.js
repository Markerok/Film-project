const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const UsersModel = require('../users/models/users') 
const {secret} = require('../config')


const generateAccessToken = (id, roles) =>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

const login = async (req, res) =>{
    const{username, password} = req.body
    const user = await UsersModel.findOne({username})
    if(!user){
        res.status(400).json({message: `User ${username} has not registry`})
    }
    const validPassword = bcrypt.compareSync(password, user.password)
    if(!validPassword){
        res.status(400).json({message: "Incorrect password"})
    }
    const token = generateAccessToken(user._id, user.roles)
    
    return res.json({token})
}

exports.login = login

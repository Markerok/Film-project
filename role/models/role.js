const mongoose = require('mongoose')

const Role = mongoose.Schema({
    value:{
        type:String,
        unique: true,
        default: 'user'
    }
})

const RoleModel = mongoose.model('Role', Role)
module.exports = RoleModel
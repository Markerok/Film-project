const RoleModel = require('../models/role')

const create = async(req, res) =>{
    const{values} = req.body
    const adminRole = await RoleModel.create({value: 'admin'})
    const  userRole = await RoleModel.create({value: 'user'})
    res.status(200).json({messages: `${userRole} \n ${adminRole}`})
}

const deleteById = async(req, res) =>{
    const users = await RoleModel.deleteMany()
    res.status(200).json(users)
}

exports.create = create
exports.deleteById = deleteById
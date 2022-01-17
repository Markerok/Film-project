const { Router } = require('express')
const router = Router()
const { create, deleteById } = require('./controller')

router.post('/', create)
router.delete('/', deleteById)

module.exports = router
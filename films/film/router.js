const { Router } = require('express')
const router = Router()
const {create, readAll, readById, updateByID, deleteAll, deleteById} = require('./controller')

router.post('/', create)
router.get('/', readAll)
router.get('/', readById)
router.put('/', updateByID)
router.delete('/', deleteAll)
router.delete('/', deleteById)

module.exports = router
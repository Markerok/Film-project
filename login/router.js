const {Router} = require('express')
const router = Router()
const {login} = require('./login')

router.get('/', login)

module.exports = router
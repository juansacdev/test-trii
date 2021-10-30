const { Router } = require('express')
const router = Router()
const { getCharacters } = require('../controller/characters')

router.get('/', getCharacters)

module.exports = router

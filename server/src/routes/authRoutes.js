const express = require('express')
const { register, login, me} = require('../controllers/authController')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/me', me)

module.exports = router;
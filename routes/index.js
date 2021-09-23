const express = require('express')
const router = express.Router()

const { checkJwt } = require('../utils/middlewares')

const AuthC = require('../controllers/AuthC')
// auth route
router.post('/auth/login', AuthC.login)
router.post('/auth/verify', AuthC.verify)

module.exports = router

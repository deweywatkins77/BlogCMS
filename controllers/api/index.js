const router = require('express').Router()
const authRoutes = require('./authRoutes')
const createAccount = require('./createAccount')

router.use('/auth', authRoutes)
router.use('/createAccount', createAccount)

module.exports = router
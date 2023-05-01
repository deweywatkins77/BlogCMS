const router = require('express').Router()
const authRoutes = require('./authRoutes')
const createAccount = require('./createAccount')
const replyRoutes = require('./replyRoutes.js')

router.use('/auth', authRoutes)
router.use('/createAccount', createAccount)
router.use('/createReply', replyRoutes)

module.exports = router
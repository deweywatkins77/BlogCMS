const router = require('express').Router()
const authRoutes = require('./authRoutes')
const createRoutes = require('./createRoutes')
const replyRoutes = require('./replyRoutes.js')
const updateRoutes = require('./updateRoutes')
const deleteRoutes = require('./deleteRoutes')

router.use('/auth', authRoutes)
router.use('/create', createRoutes)
router.use('/createReply', replyRoutes)
router.use('/updatePost', updateRoutes)
router.use('/deletePost', deleteRoutes)

module.exports = router
const router = require('express').Router()
const authRoutes = require('./authRoutes')
const createRoutes = require('./createRoutes')
const updateRoutes = require('./updateRoutes')
const deleteRoutes = require('./deleteRoutes')

router.use('/auth', authRoutes)
router.use('/create', createRoutes)
router.use('/update', updateRoutes)
router.use('/delete', deleteRoutes)

module.exports = router
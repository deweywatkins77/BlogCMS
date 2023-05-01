const router = require('express').Router()
const apiRoutes = require('./api')
const loginRoutes = require('./loginRoutes')
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homeRoutes)
router.use('/login', loginRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)
router.use('*', (req,res)=>{
    res.redirect('/')
})

module.exports = router
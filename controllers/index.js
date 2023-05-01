const router = require('express').Router()
const apiRoutes = require('./api')
const loginRoutes = require('./loginRoutes')
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const accountRoutes = require('./accountRoutes')
const blogRoutes = require('./blogRoutes')

router.use('/', homeRoutes)
router.use('/login', loginRoutes)
router.use('/createAccount', accountRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)
router.use('/blog', blogRoutes)
router.use('*', (req,res)=>{
    res.redirect('/')
})

module.exports = router
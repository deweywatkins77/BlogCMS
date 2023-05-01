const router = require('express').Router()
const accountRoutes = require('./accountRoutes')
const apiRoutes = require('./api')
const blogRoutes = require('./blogRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const homeRoutes = require('./homeRoutes')
const loginRoutes = require('./loginRoutes')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/blog', blogRoutes)
router.use('/createAccount', accountRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoutes)

router.use('*', (req,res)=>{
    res.redirect('/')
})

module.exports = router
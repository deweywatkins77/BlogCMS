const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

router.use((req, res, next) => {
    console.log('Session:', req.session);
    next();
  });

router.use('/', homeRoutes)
router.use('/api', apiRoutes)

module.exports = router
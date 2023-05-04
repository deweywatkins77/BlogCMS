const router = require('express').Router()

router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/')
    }
    res.render('login',{header:'Login'})
  })

  module.exports = router
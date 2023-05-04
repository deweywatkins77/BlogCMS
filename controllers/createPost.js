const router = require('express').Router()
const { Posts } = require('../models')

router.get('', (req, res)=>{
    res.status(200).render('createPost',{logged_in:req.session.logged_in})
})

module.exports = router
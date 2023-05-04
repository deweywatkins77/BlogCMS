const router = require('express').Router()
const { Posts, Users } = require('../models')
const { Sequelize } = require('sequelize')
const auth = require('../utils/auth')

router.get('/', auth, async (req,res) => {
    try {
      const rows = await Posts.findAll({
        where:{creator:req.session.user_id}
      })
  
      const posts = rows.map(row => row.get({plain : true}))
      res.status(200).render('dashboard',{
        posts,
        logged_in:req.session.logged_in,
        newPost: true,
        header: 'Dashboard'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  module.exports = router
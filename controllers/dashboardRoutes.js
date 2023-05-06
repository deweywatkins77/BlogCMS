const router = require('express').Router()
const { Posts, Users, Replies } = require('../models')
const { Sequelize } = require('sequelize')
const auth = require('../utils/auth')

router.get('/', auth, async (req,res) => {
    try {
      let posts = await Posts.findAll({
        where:{creator:req.session.user_id},
        attributes:[
          'id',
          'title',
          'content',
          'created_date',
          [Sequelize.fn('DATE_FORMAT', Sequelize.col('created_date'), '%m-%d-%Y'), 'formatted_date']
        ],
        order: [['created_date','DESC']]
      })

      let replies = await Replies.findAll({

        where:{reply_creator:req.session.user_id},
        attributes:[
          'id',
          'post_id',
          'reply_content',
          'reply_date',
          [Sequelize.fn('DATE_FORMAT', Sequelize.col('reply_date'), '%m-%d-%Y'), 'formatted_date']
        ],
        include:[{
          model:Posts,
          attributes: ['title']
        }],
        order:[['reply_date', 'DESC']]
      })
  
      posts = posts.map(post => post.get({plain : true}))
      replies = replies.map(reply => reply.get({plain:true}))

      res.status(200).render('dashboard',{
        posts,
        replies,
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
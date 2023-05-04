const router = require('express').Router()
const { Users, Posts, Replies } = require('../models')
const { Sequelize } = require('sequelize')

router.get('/:id', async (req, res) => {
  try {
    let post = await Posts.findOne({ 
        where:{id:req.params.id},
        include:[
          { model: Replies, 
            include: [{model: Users, attributes: ['name']}],
            attributes: [
              'id',
              'post_id', 
              'reply_content',
              'reply_creator', 
              'reply_date',
              [Sequelize.fn('DATE_FORMAT', Sequelize.col('Replies.reply_date'), '%m-%d-%Y'), 'formatted_date']
          ]},  
          { model: Users, attributes: ['name'] }
        ],
        order: [[{ model: Replies }, 'reply_date', 'DESC']]
    })
    res.status(200).render('blog',{post:post.toJSON(), logged_in:req.session.logged_in, header:post.title}) 
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

router.get('/edit/:id', async (req,res) => {
  try{
    const id = req.params.id
    let post = await Posts.findOne({where:{id:id}})
    post = post.toJSON()
    
    let authUser = await Users.findOne({where:{id:post.creator}})
    authUser = authUser.toJSON()

    if (authUser.id === req.session.user_id ){
      res.render('blog',{post, edit_Allowed:true, logged_in:req.session.logged_in, header:post.title}) 
    }else{
      req.session.destroy(() => {
        res.redirect('/')
      })
    }
  }catch (error){
    console.log(error)
  }
})

module.exports = router
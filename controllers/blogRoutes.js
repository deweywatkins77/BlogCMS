const router = require('express').Router()
const { Users, Posts, Replies } = require('../models')

router.get('/:id', async (req, res) => {
  try {
    let post = await Posts.findOne({ 
        where:{id:req.params.id},
        include:[
            { model: Replies, include: [{ model: Users, attributes: ['name'] }] },
            { model: Users, attributes: ['name'] }
          ]
    })
    console.log(post.toJSON())
    res.status(200).render('blog',{post:post.toJSON()}) 
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

module.exports = router
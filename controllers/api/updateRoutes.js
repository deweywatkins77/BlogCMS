const router = require('express').Router()
const { Posts } = require('../../models')

router.put('/', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    if (req.body.blog_id){
      console.log(12)
        Posts.update(
          {content: req.body.content},
          {where: {id: req.body.blog_id}}
        ).then((user) => {
          console.log(17)
            res.status(200).json({message:'Post updated!'})
          }).catch((err) => {
            res.status(500).json({message:"Database Error"})
          })
    }
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

module.exports = router
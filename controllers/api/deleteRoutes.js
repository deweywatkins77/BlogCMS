const router = require('express').Router()
const { Posts } = require('../../models')

router.delete('/post', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }

    if (req.body.blog_id){
        Posts.destroy({
            where: {id: req.body.blog_id}
        }).then((user) => {
            res.status(200).json({message:'Post deleted!'})
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
const router = require('express').Router()
const { Posts, Replies } = require('../../models')

router.delete('/post', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }

    if (req.body.id){
        Posts.destroy({
            where: {id: req.body.id}
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

router.delete('/reply', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }

    if (req.body.id){
        Replies.destroy({
            where: {id: req.body.id}
        }).then((user) => {
            res.status(200).json({message:'Comment deleted!'})
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
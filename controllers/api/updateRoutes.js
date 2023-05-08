const router = require('express').Router()
const { Posts, Replies } = require('../../models')

router.put('/post', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    if (req.body.id){
        Posts.update(
          {content: req.body.content},
          {where: {id: req.body.id}}
        ).then((user) => {
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

router.put('/reply', async (req, res) => {
  try {
    //do not remove this if statement
    if (!req.session.logged_in) {
      res.sendStatus(401) 
      return
    }
    if (req.body.id){
        Replies.update(
          {reply_content: req.body.content},
          {where: {id: req.body.id}}
        ).then((user) => {
            res.status(200).json({message:'Comment updated!'})
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
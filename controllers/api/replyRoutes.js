const router = require('express').Router()
const { Replies } = require('../../models')
const auth = require('../../utils/auth')

router.put('/', auth, async (req, res) => {
  try {
    if (req.body.blog_id && req.session.logged_in){
        Replies.create({
            reply_content: req.body.content,
            post_id: req.body.blog_id,
            reply_creator: req.session.user_id
        }).then((user) => {
            res.status(200).json({message:'Comment Added!'});
          }).catch((err) => {
            res.status(500).json({message:"Incorrect text, try with out using symbols."});
          });
      return
    }
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

module.exports = router
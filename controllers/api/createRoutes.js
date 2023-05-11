const router = require('express').Router()
const { Users, Replies, Posts } = require('../../models')

router.post('/account', async (req, res) => {
  try {
    let rows = await Users.findAll({ attributes:['name'] })
    let existingUsers = rows.map(row => row.get({plain:true}).name)
    if (!existingUsers.includes(req.body.user)){
        Users.create({name: req.body.user, password:req.body.password}).then((user) => {
            res.status(200).json({message:'Account created successfully'})
          }).catch((err) => {
            res.status(500).json({message:"Password needs to be at least 8 characters"})
          })
    }else{
      res.status(300).json({message:"Account Already Exists!"})
    }
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

router.post('/post', async (req, res) => {
    try {
      //do not remove this if statement
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }
  
      if (req.body.title && req.body.content){
          Posts.create({
              title: req.body.title,
              content: req.body.content,
              creator: req.session.user_id
          }).then((user) => {
              res.status(200).json({message:'Post Created'})
            }).catch((err) => {
              res.status(500).json({message:"Database Error."})
            })
      }else{
          res.sendStatus(401).json({message: "Title and/or content missing."})
      }
    } catch (err) {
      res.status(400).json(err)
      console.log(err)
    }
  })

router.post('/reply', async (req, res) => {
    try {
      //do not remove this if statement
      if (!req.session.logged_in) {
        res.sendStatus(401) 
        return
      }
  
      if (req.body.blog_id){
          Replies.create({
              reply_content: req.body.content,
              post_id: req.body.blog_id,
              reply_creator: req.session.user_id
          }).then((user) => {
              res.status(200).json({message:'Comment Added!'})
            }).catch((err) => {
              res.status(500).json({message:"Incorrect text, try with out using symbols."})
            })
      }
    } catch (err) {
      res.status(400).json(err)
      console.log(err)
    }
  })

module.exports = router
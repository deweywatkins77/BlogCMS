const router = require('express').Router()
const { Posts } = require('../models')

router.get('', (req, res)=>{
    res.status(200).render('createPost',{logged_in:req.session.logged_in})
})

router.post('/', async (req, res) => {
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

module.exports = router
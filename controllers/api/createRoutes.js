const router = require('express').Router()
const { Users } = require('../../models')

router.post('/account', async (req, res) => {
  try {
    let rows = await Users.findAll({ attributes:['name'] })
    let existingUsers = rows.map(row => row.get({plain:true}).name)
    if (!existingUsers.includes(req.body.user)){
        Users.create({name: req.body.user, password:req.body.password}).then((user) => {
            res.status(200).json({message:'Account created successfully'})
          }).catch((err) => {
            res.status(500).json({message:"Couldn't Create Account"})
          })
    }else{
      res.status(500).json({message:"Account Already Exists!"})
    }
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

module.exports = router
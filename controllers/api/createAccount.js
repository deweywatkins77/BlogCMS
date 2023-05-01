const router = require('express').Router()
const { Users } = require('../../models')

router.post('/', async (req, res) => {
  try {
    let rows = await Users.findAll({ attributes:['name'] })
    let existingUsers = rows.map(row => row.get({plain:true}))

    if (!Object.values(existingUsers).includes(req.body.user)){
        Users.create({name: req.body.user, password:req.body.password}).then((user) => {
            res.status(200).json({message:'User created successfully'});
          }).catch((err) => {
            res.status(500).json({message:"Password doesn't meet minimum requirements"});
          });
      return
    }
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

module.exports = router
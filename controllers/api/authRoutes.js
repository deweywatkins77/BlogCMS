const router = require('express').Router()
const { Users } = require('../../models')

let validPassword
let userDataJson

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { name: req.body.user } })

    if (userData) {
      userDataJson = userData.toJSON()
      validPassword = await userData.checkPass(req.body.password)
    }

    if (userData && validPassword) {
      req.session.save(() => {
        req.session.user_id = userDataJson.id
        req.session.logged_in = true
        res.json({ user: userDataJson, message: 'You are now logged in!' })
      })
      return
    }

    res.status(400)
    .json({ message: 'Incorrect Username or Password, please try again' })
    
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router
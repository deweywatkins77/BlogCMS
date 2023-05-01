const router = require('express').Router()
const { Posts, Users } = require('../models')

router.get('/', async (req, res) => {
  try {
    const rows = await Posts.findAll({
      include: [{
        model: Users,
        attributes: ['name']
      }],
      order: [['created_date','DESC']]
    })
    console.log(rows)
    const posts = rows.map(row => row.get({ plain: true }));
    console.log(posts)
    res.status(200).render('homepage',{
      posts,
      logged_in:req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/')
    return
  }
  res.render('login')
})

module.exports = router
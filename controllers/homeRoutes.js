const router = require('express').Router()
const { Posts, Users } = require('../models')
const { Sequelize } = require('sequelize')

router.get('/', async (req, res) => {
  try {
    const rows = await Posts.findAll({
      include: [{
        model: Users,
        attributes: ['name']
      }],
      attributes:[
        'id',
        'title',
        'content',
        [Sequelize.fn('DATE_FORMAT', Sequelize.col('created_date'), '%m-%d-%Y'), 'created_date']
      ],
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
    console.log(err)
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
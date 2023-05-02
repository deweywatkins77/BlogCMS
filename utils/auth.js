const auth = (req, res, next) => {
  console.log(req.method)
    if (!req.session.logged_in) {
      res.redirect('/login')
    } else {
      next()
    }
  }
  
  module.exports = auth  
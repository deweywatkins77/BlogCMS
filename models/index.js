const Users = require('./Users')
const Posts = require('./Posts')
const Replies = require('./Replies')

Users.hasMany(Posts, {foreignKey: 'creator'})
Posts.belongsTo(Users,{foreignKey: "creator"})

module.exports = { Users, Posts, Replies }
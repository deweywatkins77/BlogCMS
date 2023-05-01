const Users = require('./Users')
const Posts = require('./Posts')
const Replies = require('./Replies')

Users.hasMany(Posts, {foreignKey: 'creator'})
Posts.belongsTo(Users, {foreignKey: "creator"})

Users.hasMany(Replies, {foreignKey: 'reply_creator'})
Replies.belongsTo(Users, {foreignKey: 'reply_creator'})

Posts.hasMany(Replies, { foreignKey: 'post_id' })
Replies.belongsTo(Posts, { foreignKey: 'post_id' })



module.exports = { Users, Posts, Replies }
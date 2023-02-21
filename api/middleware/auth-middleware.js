const db = require('../../data/dbConfig')

async function checkUsernameFree(req, res, next) {
  const user = await db('users').where("username", req.body.username).first()
  if (!user) {
    next()
  } else {
    next({status: 422, message: "Username taken"})
  }
}

async function checkUsernameExists(req, res, next) {
  const user = await db('users').where("username", req.body.username).first()
  if (user) {
    next()
  } else {
    next({status: 401, message: "Invalid credentials"})
  }
}

function checkCredentials(req, res, next) {
  const user = req.body
  if (user.username && user.password && user.username.length && user.password.length) {
    next()
  } else {
    next({status:401, message: "username and password required"})
  }
}


module.exports = {
  checkUsernameExists,
  checkUsernameFree,
  checkCredentials
}
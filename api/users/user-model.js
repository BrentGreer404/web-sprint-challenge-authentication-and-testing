const db = require('../../data/dbConfig')

async function add(user) {
  const [id] = await db('users').insert(user)
  return findById(id)

}

function findById(id) {
  return db('users').where("id", id)
}

module.exports = {
  add,
  findById
}
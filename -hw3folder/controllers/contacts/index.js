/*  Імпортумо моделі */
const getAll = require('./getAll')
const getById = require('./getById')
const add = require('./add')
const update = require('./update')
const updateFavorite = require('./updateFavorite')
const remove = require('./remove')

module.exports = {
  getAll,
  getById,
  add,
  update,
  updateFavorite,
  remove,
}

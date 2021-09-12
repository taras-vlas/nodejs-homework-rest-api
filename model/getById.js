const getAll = require('./getAll')

// @ GET
const getById = async (id) => {
  const contacts = await getAll()
  const selectContact = contacts.find((item) => item.id === Number(id))
  if (!selectContact) {
    return null
  }
  return selectContact
}

module.exports = getById

const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ PUT
const update = async (id, updateInfo) => {
  const contacts = await getAll()
  const idx = contacts.findIndex((item) => item.id === Number(id))
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...contacts[idx], ...updateInfo }

  await updateContacts(contacts)
  return contacts[idx]
}

module.exports = update

const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ DELETE
const del = async (id) => {
  const contacts = await getAll()
  const idx = contacts.findIndex((item) => item.id === Number(id))
  console.log('idx:', idx, id)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter((item) => item.id !== Number(id))

  await updateContacts(newContacts)
  return contacts[idx]
}

module.exports = del

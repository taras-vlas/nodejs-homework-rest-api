const { customAlphabet } = require('nanoid')
const newId = customAlphabet('1234567890', 3)

const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ POST
const add = async (data) => {
  console.log('data:', data)

  const newContact = { ...data, id: Number(newId()) }
  const contacts = await getAll()
  console.log('id  Number(newId():', Number(newId()))

  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = add

const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ PUT
// const update = async (id, updateInfo) => {
const update = async (id, updateInfo) => {
  // try {
  const contacts = await getAll()
  const idx = contacts.findIndex((item) => item.id === Number(id)) // id
  if (idx === -1) {
    // throw new Error(`Contact with id=${id} not found`);
    return null
  }
  // contacts[idx] = { ...contacts[idx], ...updateInfo };
  contacts[idx] = { ...contacts[idx], ...updateInfo }

  await updateContacts(contacts)
  return contacts[idx]
  // }
  // catch (error) {
  //     // console.err(error);
  //     throw error;
  // }
}

module.exports = update

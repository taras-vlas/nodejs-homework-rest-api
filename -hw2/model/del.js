const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ DELETE
const del = async (id) => {
  // try {
  const contacts = await getAll()
  const idx = contacts.findIndex((item) => item.id === Number(id)) // id
  console.log('idx:', idx, id)
  if (idx === -1) {
    // throw new Error(`Contact with id=${id} not found`);
    return null
  }
  const newContacts = contacts.filter((item) => item.id !== Number(id)) // id
  // const delContact = contacts.splice(idx, 1);
  await updateContacts(newContacts)
  return contacts[idx]
  // }
  // catch (error) {
  //     // console.err(error);
  //     throw error;
  // }
}

module.exports = del

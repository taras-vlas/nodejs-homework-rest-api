const getAll = require('./getAll')

// @ GET
const getById = async (id) => {
  // try {
  const contacts = await getAll()
  const selectContact = contacts.find((item) => item.id === Number(id)) // id
  if (!selectContact) {
    // throw new Error(`Contact with id=${id} not found`);
    return null
  }
  return selectContact
  // }
  // catch (error) {
  //     // console.err(error);
  //     throw error;
  // }
}

module.exports = getById

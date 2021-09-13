const { customAlphabet } = require('nanoid')
const newId = customAlphabet('1234567890', 3) // 10

const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

// @ POST
const add = async (data) => {
  console.log('data:', data)
  // try {
  const newContact = { ...data, id: Number(newId()) } // v4()
  const contacts = await getAll()
  console.log('id  Number(newId():', Number(newId()))
  // const newContacts = [...contacts, newContact];
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
  // }
  // catch(error){
  //     // console.err(error);
  //     throw error;    // генерирует исключение, значением которого является error
  // }
}

module.exports = add

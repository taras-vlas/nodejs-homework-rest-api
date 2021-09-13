const fs = require('fs/promises')

const filePath = require('./filePath')

// @ GET
const getAll = async () => {
  // try {
  const data = await fs.readFile(filePath)
  const contacts = JSON.parse(data)
  return contacts
  // }
  // catch (error) {
  //      // console.err(error);
  //     throw error;
  // }
}

module.exports = getAll

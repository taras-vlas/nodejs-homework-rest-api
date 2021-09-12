const fs = require('fs/promises')

const filePath = require('./filePath')

// @ GET
const getAll = async () => {
  const data = await fs.readFile(filePath)
  const contacts = JSON.parse(data)
  return contacts
}

module.exports = getAll


const contactsOperations = require('../../model/')

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll()

    res.json({
      status: 'success',
      data: {
        result: contacts,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll

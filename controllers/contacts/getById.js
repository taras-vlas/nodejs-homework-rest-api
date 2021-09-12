const contactsOperations = require('../../model/')

const getById = async (req, res) => {
  try {
    console.log('req.params:', req.params)
    const { id } = req.params
    const contact = await contactsOperations.getById(id)
    console.log('contact:', contact)
    if (!contact) {
      return res.status(404).json({
        message: 'Not Found',
      })
    }

    res.json({
      status: 'success',

      data: {
        result: contact,
      },
    })
  } catch (error) {
    // next(error)
  }
}

module.exports = getById

const { Contact } = require('../../models')

const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteContact = await Contact.findByIdAndDelete(id)
    if (!deleteContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }

    res.json({
      deleteContact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = remove

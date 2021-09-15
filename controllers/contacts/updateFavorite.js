const { Contact } = require('../../models')

const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params

    const { favorite } = req.body
    const updateContact = await Contact.findByIdAndUpdate(
      id,
      { favorite },
      { new: true }
    )
    if (!updateContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    res.json({
      updateContact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateFavorite

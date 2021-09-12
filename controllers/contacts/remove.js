const contactsOperations = require('../../model/')

const remove = async (req, res) => {
  try {
    const { id } = req.params
    const deleteContact = await contactsOperations.del(id)
    if (!deleteContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    res.json({
      status: 'success',
      message: 'contact deleted',
      data: {
        result: deleteContact,
      },
    })
  } catch (error) {
    // next(error)
  }
}

module.exports = remove

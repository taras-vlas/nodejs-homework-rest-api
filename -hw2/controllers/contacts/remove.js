// const contactsOperations = require('../../model/contacts')
const contactsOperations = require('../../model/')

// Видаляємо контакт
const remove = async (req, res) => {
  try {
    const { id } = req.params
    const deleteContact = await contactsOperations.del(id)
    if (!deleteContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    // res.status(204).json()   //по замовчуванні, без тіла
    res.json({
      status: 'success',
      // code: 200,
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

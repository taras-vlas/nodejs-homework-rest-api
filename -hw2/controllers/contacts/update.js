const contactsOperations = require('../../model/')
// const contactsOperations = require("../../model/contacts");
const { contactSchema } = require('../../validation')

// Оновлення контакта
const update = async (req, res) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.message
        // message: "missing fields",
      })
    }

    const { id } = req.params
    const updateContact = await contactsOperations.update(id, req.body)
    if (!updateContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }

    res.json({
      status: 'success',
      // code: 200,
      data: {
        result: updateContact,
      },
    })
  } catch (error) {
    //    next(error)
  }
}

module.exports = update

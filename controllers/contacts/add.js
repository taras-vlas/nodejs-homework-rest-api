const contactsOperations = require('../../model/')
const { contactSchema } = require('../../validation')

const add = async (req, res) => {
  try {
    console.log(req.body)
    const { error } = contactSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.message
      })
    }

    const newContact = await contactsOperations.add(req.body)

    res.status(201).json({
      newContact,
    })
  } catch (error) {
    // next(error)
  }
}

module.exports = add

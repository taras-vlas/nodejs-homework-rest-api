// const contactsOperations = require('../../model/contacts')
const contactsOperations = require('../../model/')
const { contactSchema } = require('../../validation')

// Добавляємо/створюємо контакт  @ POST /api/v1/contacts
const add = async (req, res) => {
  try {
    console.log(req.body) // вивели те що зчитано через requst.json  Postman
    const { error } = contactSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.message
        // message: 'missing required name field',
      })
    }

    const newContact = await contactsOperations.add(req.body)

    res.status(201).json({
      newContact,
    })
  } catch (error) {
    //    next(error)
  }
}

module.exports = add

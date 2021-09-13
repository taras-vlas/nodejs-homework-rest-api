const { Contact } = require('../../models')
// const { contactSchema } = require('../../models/contact')

// @ PUT /api/contacts/:id
const update = async (req, res, next) => {
  try {
    // const { error } = contactSchema.validate(req.body)
    // if (error) {
    //     return res.status(400).json({
    //         message: 'missing fields',
    //     })
    // }

    const { id } = req.params
    const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    }) //  new: true -повертає з бази оновлений об'єкт
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

module.exports = update

const { Contact } = require('../../models')
// const { contactSchema } = require('../../models/contact')

const updateFavorite = async (req, res, next) => {
  try {
    // console.log('req.body', req.body)
    // const { error } = contactSchema.validate(req.body)
    // if (error) {
    //     return res.status(400).json({
    //         message: 'missing field favorite',
    //     })
    // }

    const { id } = req.params

    // const favorite = { favorite: req.body.favorite };
    const { favorite } = req.body // це патч
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

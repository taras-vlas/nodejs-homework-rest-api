const { Contact } = require('../../models')

const getById = async (req, res, next) => {
  try {
    console.log('req.params:', req.params)
    const { id } = req.params
    // const contact = await Contact.findOne({ _id: id })
    const contact = await Contact.findById(id)
    //            const contact = await Lead.findById(id)
    // console.log(lead.attributes)
    console.log('contact:', contact)
    if (!contact) {
      return res.status(404).json({
        message: 'Not Found', // якщо довжина id співпадає
      })
    }

    res.json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getById

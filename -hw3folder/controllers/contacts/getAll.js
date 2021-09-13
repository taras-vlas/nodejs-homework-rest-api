const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}) // {name: "x"} - точне порівняння;    // , "name country email phone age status") - вказує порядок виводу
    res.json({
      contacts,
    })
  } catch (error) {
    next(error)
  }
}
module.exports = getAll

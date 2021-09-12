// const contactsOperations = require('../../model/contacts')
const contactsOperations = require('../../model/')

// Отримуємо контакт по id
const getById = async (req, res) => {
  try {
    console.log('req.params:', req.params) // всі динамічні частини знаходяться у об'єкті req.params
    const { id } = req.params // для зчитування динамічної частини :id | id витягаємо через реструктуризацію {id}
    const contact = await contactsOperations.getById(id)
    console.log('contact:', contact)
    if (!contact) {
      // Якщо  неправильне id
      return res.status(404).json({
        message: 'Not Found',
      })
    }

    res.json({
      status: 'success',
      // code: 200,
      data: {
        result: contact,
      },
    })
  } catch (error) {
    //    next(error)
  }
}

module.exports = getById

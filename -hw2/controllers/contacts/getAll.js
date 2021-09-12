// const contactsOperations = require('../../model/contacts')
const contactsOperations = require('../../model/')

// Отримуємо all колекцію контактів
const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll()
    // res.status(200).json({   //по замовчуванні
    res.json({
      status: 'success',
      // code: 200,
      data: {
        result: contacts,
      },
    })
  } catch (error) {
    // if (error.message === "") {
    //     error.status = 404;
    // }

    // console.log(error)        //але не дає ВІДПОВІДІ
    // res.status(500).json({   // краще це записати в обробник помилок
    //     message: "Server error"
    // })
    next(error)
  }
}

module.exports = getAll

const { Contact } = require('../../models')
// const { contactSchema } = require('../../models/contact')

const add = async (req, res, next) => {
  try {
    /* це був імпорт схеми контроля
            *  або можна вписувати і до api/contacts
            *  через validationMiddleware в router.put(...)
            */
    // console.log('req.body', req.body)
    // const { error } = contactSchema.validate(req.body)
    // if (error) {
    //     return res.status(400).json({
    //         message: 'missing required name field',
    //     })
    // }

    const result = await Contact.create(req.body)

    res.status(201).json({
      result,
    })
  } catch (error) {
    // console.log(error.message);
    error.status = 400 // щоб було 400, а не 500 по next. але бажано генерувати помилку зразу пысля  поз.18
    next(error)
  }
}

module.exports = add

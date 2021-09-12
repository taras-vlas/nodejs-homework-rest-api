const Joi = require('joi')

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/
const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
})

module.exports = joiContactSchema

const Joi = require('joi')

const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/
const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  // phone: Joi.string()
  //     .trim()
  //     //.regex(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)
  //     .regex(/^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/)
  //     .required(), // 067-555-55-55      // '2135551997' (/^[0-9]{7,10}$/)
  // phone: Joi.string().length(10).pattern(/^[0-9]+$/).required()  //  (992) 914-3792
  // phone: Joi.string().pattern(new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$")), // 067-555-55-55    // +38 (067) 555-55-55
  // phone: Joi.string().pattern(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/).required() // +38 (067) 555-55-55
})

module.exports = joiContactSchema

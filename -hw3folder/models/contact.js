/* Створюємо моделі */
const { Schema, model } = require('mongoose')
const Joi = require('joi')
// const { message } = require('../-validation/contactSchema')

const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegexp = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/ // регуляярні вирази

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'], // required: true -вказує на обовязковість поля
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
      // unique: true,  // за умови використання в базі index
      // validate: { ... message...},
    },
    phone: {
      type: String,
      match: phoneRegexp, // регуляярні вирази
      // maxlength: 15,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    /*  щодо осн. способів перевівки полів */
    // status: {
    //     type: String,
    //     enum: ["customer", "admin"]  //якийсь з цих перерахованих
    //     unique: true
    // },

    // price: {
    //     type: Number,
    //     required: [true, 'Цена товара обязательно'],
    //     min: 0.01,
    // },

    // size: {
    //     width: {
    //         type: String,
    //         required: true
    //     }
    // },
    // array: [{
    //     name: String
    // }],
  },
  { versionKey: false, timestamps: true }
)

const joiSchema = Joi.object({
  name: Joi.string().required(),
  // email: Joi.string().email().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean().required(),
  // price: Joi.number().min(0.01).required(),
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
}

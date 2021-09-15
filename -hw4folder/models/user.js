const bcrypt = require('bcryptjs') // для хешування - безповоротне перетворення - перед збереженням в базі
const { Schema, model } = require('mongoose')
const Joi = require('joi')
const { v4 } = require('uuid')

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },

    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },

  },
  { versionKey: false, timestamps: true }
)

/* хешування пороля в базу */
userSchema.methods.setPassword = function(password) { // метод setPassword
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  console.log(' as hashPassword - userSchema.methods.setPassword', userSchema.methods.setPassword)
}

userSchema.methods.comparePassword = function(password) { // метод порівняння comparePassword
  console.log(' as result - userSchema.methods.comparePassword', userSchema.methods.comparePassword)
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.createVerifyToken = function () {
  this.verifyToken = v4()
  console.log('userSchema.methods.createVerifyToken', userSchema.methods.createVerifyToken)
}

const joiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
})

const User = model('user', userSchema) // створюєм модель User - з великої букви в одинарн.числі; "user" - схема

module.exports = { User, joiSchema }

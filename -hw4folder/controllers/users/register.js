/// const bcrypt = require('bcryptjs') //для поз. 30 та 31
/// /const { json } = require('express')
const { Conflict } = require('http-errors') // code: 409

const { User } = require('../../models')

const register = async (req, res, next) => {
  /// /    try {
  const { email, password } = req.body
  const user = await User.findOne({ email }) // Пошук - чи є такий користувач по такому критерію: { email: email }
  //      використовуєм   findById  для поля
  if (user) {
    throw new Conflict('Already register') // генерація помилки code: 409
    // return res.status(409).json({
    //     status: 'error',
    //     code: 409,
    //     message: 'Already register',
    // })
    /*   або для безпеки - code: 400, message: 'email or password wrong'
            // return res.status(400).json({
            //     status: 'error',
            //     code: 409,
            //     message: 'Already register',
            // })
            */
  }

  // duplicate key error collection: db-contacts.contacts index: phone_1

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({email, password: hashPassword});    // вираз {req.body}

  // const newUser = new User({email, verifyToken: v4()});
  /* або так: */
  const newUser = new User({ email })

  newUser.createVerifyToken()
  newUser.setPassword(password)

  await newUser.save() // зі створенням нової колекції - new User, і тепер ЗБЕРІГАЄМО в базі

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Success register',

  })
  ///    }
  /// catch (error) {
  ///     next(error);
  /// }
}

module.exports = register

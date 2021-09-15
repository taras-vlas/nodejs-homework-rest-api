const jwt = require('jsonwebtoken') /// бібліотека для сотворення токенів
const { Unauthorized } = require('http-errors') // Status Code 401

const { User } = require('../models')

const { SECRET_KEY } = process.env /// секрет для підпису токена

const authenticate = async (req, _, next) => {
  try {
    console.log('req.headers :', req.headers) // req.headers.authorization
    const [bearer, token] = req.headers.authorization.split(' ') // розділяємо token
    if (bearer !== 'Bearer') {
      // "предъявитель" - bearer.   ПЕРЕВІРКА ТОКЕНА
      throw new Unauthorized()
    }

    const { id } = jwt.verify(token, SECRET_KEY) ///
    console.log(typeof token) // typeof - operator returns a string indicating the type of the unevaluated operand
    console.log('id :', id)

    // const user = await User.findById({id})
    const user = await User.findOne({ token }) // Вхід юзера.   Пошук по email або subscription?
    console.log('user :', user)
    if (!user) {
      throw new Unauthorized()
    }

    req.user = user
    next()
  } catch (error) {
    throw new Unauthorized(error.message)
  }
}

module.exports = authenticate

// /* Middleware unauthorized error */
// Status: 401 Unauthorized
// Content-Type: application/json
// ResponseBody: {
//   "message": "Not authorized"
// }

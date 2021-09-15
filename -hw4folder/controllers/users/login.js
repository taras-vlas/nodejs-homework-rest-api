const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { BadRequest } = require('http-errors') // code: 400

const { User } = require('../../models')

const login = async (req, res) => {
  // try {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  console.log('user.email:', user.email)
  // if (!user || !user.comparePassword(password)) {
  //     throw new BadRequest("Wrong email or password")

  //     return res.status(400).json({
  //         status: "error",
  //         code: 400,
  //         message: "Wrong email or password"
  //     });
  // }
  /* або так: */
  if (!user) {
    throw new BadRequest('Wrong email')
    //  return res.status(400).json({
    //      status: 'error',
    //      code: 400,
    //      message: 'Wrong email',
    //  })
  }

  console.log('user.verify:', user.verify)
  // if (!user.verify) {
  //     throw new BadRequest('Email not confirmed') // не підтверджено
  // }

  const hashPassword = user.password // дістаємо hashPassword
  const compareResult = bcrypt.compareSync(password, hashPassword)
  // const compareResult = user.comparePassword(password);
  console.log('compareResult:', compareResult)
  if (!compareResult) {
    throw new BadRequest('Wrong password')
    // return res.status(400).json({
    //     status: 'error',
    //     code: 400,
    //     message: 'Wrong password',
    // })
  }

  const payload = {
    // це третя частина токена, з-за _id вона у усіх різна
    id: user._id,
  }
  const { SECRET_KEY } = process.env
  // const token = 'fhfsfgs.dfgsfhfhh.dfddsadfff' //створюємо token і віддаємо

  const token = jwt.sign(payload, SECRET_KEY)
  console.log('token', token)
  await User.findByIdAndUpdate(user._id, { token })

  res.json({
    token,
  })
  //     } catch (error) {
  //         next(error)
  //     }
}

module.exports = login

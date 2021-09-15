const { NotFound } = require('http-errors')

const { User } = require('../../models')

// @ GET
const verify = async (req, res) => {
  const { verifyToken } = req.params
  const user = await User.findOne({ verifyToken })
  if (!user) {
    throw new NotFound('USER not found')
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  res.send('<h2>Email confirmed</h2>')
}

module.exports = verify

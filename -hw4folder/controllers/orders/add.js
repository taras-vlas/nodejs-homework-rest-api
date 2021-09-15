const { Order } = require('../../models')

const add = async (req, res) => {
  // console.log('reg.user  :', reg.user) //інфа про користувача який залогінений
  const newOrder = { ...req.body, owner: req.user._id }
  const result = await Order.create(newOrder)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  })
}

module.exports = add

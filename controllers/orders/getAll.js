const { Order } = require('../../models')

const getAll = async (req, res) => {
  const result = await Order.find({ owner: req.user._id })

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getAll

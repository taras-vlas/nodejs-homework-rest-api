const { Order } = require('../../models')

const getAll = async (req, res) => {
  // populate-розповсюдити запит. Йди в колекцію (а це "users") з якою звязаний 'owner', найди і підстав в поле owner всі його значення ;
  const result = await Order.find({ owner: req.user._id })
  //                         .populate('owner', '_id email' // 2-м аргументом ідуть поля, якы треба взяти з усіх
  // )

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getAll

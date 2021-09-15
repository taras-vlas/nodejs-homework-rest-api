const { User } = require('../../models')
// /* Logout request */
// POST /users/logout
// Authorization: "Bearer {{token}}"

// /* Logout unauthorized error */
// Status: 401 Unauthorized
// Content-Type: application/json
// ResponseBody: {
//   "message": "Not authorized"
// }

// /* Logout success response */
// Status: 204 No Content

// const logout = async (req, res, next) => {
//     try {
//         return await updateToken(req.user.id, null)
//     } catch (e) {
//         next(e)
//     }
// }
const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { token: null })
  res.json({
    status: 'success',
    code: 200,
    message: 'Success logout',
  })
}

module.exports = logout

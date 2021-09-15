
/* Current user request */
GET /users/current
Authorization: "Bearer {{token}}"

/* Current user unauthorized error */
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

/* Current user success response */
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "email": "example@example.com",
  "subscription": "starter"
}

const getCurrentUser = async (req, res, next) => {
  try {
    const currentUser = await findById(req.user.id)
    if (currentUser) {
      const { email, subscription } = currentUser
      return res.status(200).json({ email, subscription })
    }
  } catch (e) {
    next(e)
  }
}

module.exports = getCurrentUser 
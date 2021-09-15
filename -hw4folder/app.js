const express = require('express')
const cors = require('cors')

const { usersRouter, ordersRouter } = require('./routes/api')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/orders', ordersRouter)
// POST - /api/v1/auth/register (signup) рег.
// POST - /api/v1/auth/login   (signin)  вх.
// GET - /api/v1/auth/logout  (signout) вих.

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  })
})

app.use((error, _, res, __) => {
  const { status = 500, message = 'Server error' } = error
  res.status(status).json({
    status: 'error',
    code: status,
    message,
  })
})

module.exports = app

// /*  contacts  */

// const express = require('express')
// const logger = require('morgan')
// const cors = require('cors')

// const contactsRouter = require('./routes/api/contacts')
// const { usersRouter, ordersRouter } = require('./routes/api')

// const app = express()

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

// app.use(logger(formatsLogger))
// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('<h2>Home page</h2>')
// })
// // app.set('view ', 'ejs')
// // app.set('views', './views')

// app.use('/api/v1/contacts', contactsRouter)

// app.use((_, res) => {
//     res.status(404).json({ message: 'Not found' })
// })

// app.use((err, _, res, __) => {
//     // app.use((err, req, res, next) => {
//     //     res.status(500).json({ message: err.message })  //res.status(status).json({ message })
//     // })
//     const { status = 500, message = 'Server error' } = err
//     res.status(status).json({
//         status: 'error', // "fail",
//         code: status,
//         message,
//     })
// })

// // const {DB_HOST, PORT = 3000} = process.env;

// // mongoose.connect(DB_HOST, {
// //     useCreateIndex: true,
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     useFindAndModify: false
// // }).then(()=>{
// //     app.listen(PORT)
// // }).catch(error => console.log(error))

// module.exports = app

const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
// через app. подаєм зміст записної книги
app.use(logger(formatsLogger))
app.use(cors())

app.use(express.json())

// команда app.use  добавляє до записної книги сторінку
app.use('/api/v1/contacts', contactsRouter)

// // перевірка   app. -наша зписна книга і в неї пишем
// app.get("/contacts", (req, res) => {
//   res.json({
//     data: {
//       result: "Contacts"
//     }
//   })
// });

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({
    status: 'error',
    message
  })
})

module.exports = app

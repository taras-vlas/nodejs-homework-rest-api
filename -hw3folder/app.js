const express = require('express')
const cors = require('cors')

const logger = require('morgan')

const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h2>Home page</h2>')
})

// app.set('view ', 'ejs')
// app.set('views', './views')

app.use('/api/v1/contacts', contactsRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app

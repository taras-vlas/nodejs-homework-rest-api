// const { required } = require('joi')
const mongoose = require('mongoose')

// const dotenv = require('dotenv'); // добавляємо  .env  у змінні оточення
// dotenv.config();
require('dotenv').config()

const app = require('../app')

const { DB_HOST, PORT = 3000 } = process.env
// const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })

    // console.log(`Database connect success`)
    // app.listen(PORT);
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })

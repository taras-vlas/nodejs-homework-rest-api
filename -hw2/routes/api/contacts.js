const express = require('express')

// const ctrl = require("../../controllers/contacts");
const { contacts: ctrl } = require('../../controllers') // знайти в об'єкті controllers властивість contacts  та перейменування: contacts: ctrl

// const contactsOperations = require('../../model/contacts')
const contactsOperations = require('../../model/')

// const {contactSchema} = require("../../validation");

console.log('ctrl:', ctrl)

const router = express.Router() // для створення сторінок записної книги

// напиши роут на отримання усіх контаків
// router.get("/api/v1/contacts", ctrl.getAll);
// обробник GET запиту за адресою /api/v1/contacts
router.get('/', ctrl.getAll) // "/"- означає базовий маршрут
// res.json({             // самі функції воносимо в controller
//     massage: "Not found"
// });
// напиши роут на отримання одного контакта по id
// обробник GET запиту за адресою /api/v1/contacts/2/new + динамічна частина 2/type
router.get('/:id', ctrl.getById) // ctrl.getById - описуєм маршрути як адреси для запитів
// router.get("/:id/:type", ctrl.getById);
// res.json({
//     message: "contacts list"
// })
// обробник POST запиту за адресою /api/v1/contacts
router.post('/', ctrl.add)

// обробник PUT запиту за адресою /api/v1/contacts/ + динамічна частина 2
router.put('/:id', ctrl.update)

// обробник DELETE запиту за адресою /api/v1/contacts/ + динамічна частина 2
router.delete('/:id', ctrl.remove)

module.exports = router

// const express = require('express')
// const router = express.Router()

// // const ctrl = require("../../controllers/contacts");
// // const { contacts: ctrl } = require("../../controllers");  // знайти в об'єкті controllers властивість contacts  та перейменування: contacts: ctrl

// const contactsOperations = require('../../model/contacts')
// const contactsOperations = require("../../model/");

// const { contactSchema } = require('../../validation')

// // console.log("ctrl:", ctrl);

// // напиши роут на отримання усіх контаків
// // обробник GET запиту за адресою /api/v1/contacts
// router.get('/', async (req, res, next) => {
//   try {
//     const contacts = await contactsOperations.getAll()
//     // res.status(200).json({   //по замовчуванні
//     res.json({
//       status: 'success',
//       // code: 200,
//       data: {
//         result: contacts,
//       },
//     })
//   } catch (error) {
//     // if (error.message === "") {
//     //     error.status = 404;
//     // }

//     // console.log(error)        //але не дає ВІДПОВІДІ
//     // res.status(500).json({   // краще це записати в обробник помилок
//     //     message: "Server error"
//     // })
//     //    next(error)
//   }
// })

// // напиши роут на отримання одного контакта по id
// // обробник GET запиту за адресою /api/v1/contacts/2/new + динамічна частина 2/type
// router.get('/:id', async (req, res) => {
//   try {
//     console.log('req.params:', req.params) // всі динамічні частини знаходяться у об'єкті req.params
//     const { id } = req.params // для зчитування динамічної частини :id | id витягаємо через реструктуризацію {id}
//     const contact = await contactsOperations.getById(id)
//     console.log('contact:', contact)
//     if (!contact) {
//       // Якщо  неправильне id
//       return res.status(404).json({
//         message: 'Not Found',
//       })
//     }

//     res.json({
//       status: 'success',
//       // code: 200,
//       data: {
//         result: contact,
//       },
//     })
//   } catch (error) {
//     // next(error)
//   }
// })

// // обробник POST запиту за адресою /api/v1/contacts
// router.post('/', async (req, res) => {
//   try {
//     console.log(req.body) // вивели те що зчитано через requst.json  Postman
//     const { error } = contactSchema.validate(req.body)
//     if (error) {
//       return res.status(400).json({
//         // message: error.message
//         message: 'missing required name field',
//       })
//     }

//     const newContact = await contactsOperations.add(req.body)

//     res.status(201).json({
//       newContact,
//     })
//   } catch (error) {
//     //    next(error)
//   }
// })

// // обробник PUT запиту за адресою /api/v1/contacts/ + динамічна частина 2
// router.put('/:id', async (req, res) => {
//   try {
//     const { error } = contactSchema.validate(req.body)
//     if (error) {
//       return res.status(400).json({
//         // message: error.message
//         message: 'missing fields',
//       })
//     }

//     const { id } = req.params
//     const updateContact = await contactsOperations.update(id, req.body)
//     if (!updateContact) {
//       return res.status(404).json({
//         message: 'Not found',
//       })
//     }

//     res.json({
//       status: 'success',
//       // code: 200,
//       data: {
//         result: updateContact,
//       },
//     })
//   } catch (error) {
//     //    next(error)
//   }
// })

// // обробник DELETE запиту за адресою /api/v1/contacts/ + динамічна частина 2
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const deleteContact = await contactsOperations.remove(id)
//     if (!deleteContact) {
//       return res.status(404).json({
//         message: 'Not found',
//       })
//     }
//     // res.status(204).json()   //по замовчуванні, без тіла
//     res.json({
//       status: 'success',
//       // code: 200,
//       message: 'contact deleted',
//       data: {
//         result: deleteContact,
//       },
//     })
//   } catch (error) {
//     //    next(error)
//   }
// })

// module.exports = router

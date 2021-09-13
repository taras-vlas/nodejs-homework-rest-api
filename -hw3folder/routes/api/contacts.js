const express = require('express')
const router = express.Router()

const ctrl = require('../../controllers/contacts')
// const { contacts: ctrl } = require('../../controllers')

const { joiSchema } = require('../../models/contact')
const { validation } = require('../../middlewares')

const validationMiddleware = validation(joiSchema)

console.log('ctrl:', ctrl)

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

// router.post('/', validationMiddleware, ctrl.add)
router.post('/', ctrl.add)

router.put('/:id', validationMiddleware, ctrl.update) // 1:43:30   validationMiddleware щоб валідувани не одне поле, а всі поля

// http://localhost:3000/api/v1/contacts/6132603c007f7ac0fa00e4e7/favorite/
router.patch('/:id/favorite', ctrl.updateFavorite)

router.delete('/:id', ctrl.remove)

module.exports = router

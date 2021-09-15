const express = require('express')

const ctrl = require('../../controllers/contacts')

const { joiSchema } = require('../../models/contact')
const { validation } = require('../../middlewares')

const validationMiddleware = validation(joiSchema)

console.log('ctrl:', ctrl)
const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', ctrl.add)

router.put('/:id', validationMiddleware, ctrl.update)

router.patch('/:id/favorite', ctrl.updateFavorite)

router.delete('/:id', ctrl.remove)

module.exports = router

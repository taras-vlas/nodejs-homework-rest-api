const express = require('express')

const { joiSchema } = require('../../models/order')
const { validation, controllerWrapper, authenticate, } = require('../../middlewares')
const { orders: ctrl } = require('../../controllers')

const router = express.Router()

const orderValidationMiddleware = validation(joiSchema)

/** /api/v1/orders */
router.get('/', controllerWrapper(authenticate), ctrl.getAll)

router.post('/', controllerWrapper(authenticate), orderValidationMiddleware, controllerWrapper(ctrl.add))

module.exports = router

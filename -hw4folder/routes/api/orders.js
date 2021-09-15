const express = require('express')

const { joiSchema } = require('../../models/order')
const { validation, controllerWrapper, authenticate, } = require('../../middlewares')
const { orders: ctrl } = require('../../controllers')

const router = express.Router()

const orderValidationMiddleware = validation(joiSchema)
/*
     const userValidationMiddleware = (req, res, next) => {
        const {error} = joiSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.message
            });
        }
        next();
    }
*/
/** /api/v1/orders + */
router.get('/', controllerWrapper(authenticate), ctrl.getAll)

router.post('/', controllerWrapper(authenticate), orderValidationMiddleware, controllerWrapper(ctrl.add))

module.exports = router

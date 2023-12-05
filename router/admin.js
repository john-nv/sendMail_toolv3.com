const router = require('express').Router()

const adminControllers = require('../app/controllers/admin/admin.controller')

router.post('/login', adminControllers.login)
router.post('/verify', adminControllers.verifyJWT)
router.post('/getConfig', adminControllers.getConfig)
router.post('/config', adminControllers.mdwVerifyJWT, adminControllers.editConfig)

module.exports = router
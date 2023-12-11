const { Router } = require('express')
const {
    signUp,
    logIn,
    update,
    eliminar,
    auth,
    userData
} = require('../controller/controller.usuario')
const getAvatars = require('../controller/controller.avatar')
const { electricityCalculator, gasCalculator, carbonOffsetCalculator, transportCalculator } = require('../controller/controller.carbonfp')
const {
    ECFP_VALIDATION,
    POST_DELETE,
    POST_LOGIN,
    POST_SIGN_UP,
    POST_UPDATE
} = require('../helpers/checks')
const router = Router()

router.get('/auth', auth)
router.get('/data', userData)
router.get('/sign-up', getAvatars)
router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)
router.get('/actualizar', getAvatars)
router.put('/actualizar', POST_UPDATE, update)
router.delete('/eliminar', POST_DELETE, eliminar)
router.post('/calculadora/electricidad', electricityCalculator)
router.post('/calculadora/gas', gasCalculator)
router.post('/calculadora/transporte', transportCalculator)
router.post('/calculadora/offset', carbonOffsetCalculator)

module.exports = router
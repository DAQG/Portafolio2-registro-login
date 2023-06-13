// INVOCAR LA FUNCION ROUTER
const {Router} = require('express')

//INVOCAR LAS FUNCIONES DEL CONTROLADOR
const {
     renderRegisterForm, 
     registerNewUser, 
     renderLoginForm, 
     loginUser, 
     logoutUser } = require('../controllers/user.controller')
//INICIALIZAR LA FUNCION EN LA VARIBLE ROUTER
const router = Router()

//DEFINICION DE LAS RUTAS
router.get('/user/register',renderRegisterForm)
router.post('/user/register',registerNewUser)
router.get('/user/login',renderLoginForm)
router.post('/user/login',loginUser)
router.post('/user/logout',logoutUser)


router.post('/user/logout',logoutUser)


module.exports =router
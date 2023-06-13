//IMPORTACION DEL PASSPORT
const passport = require('passport')
//IMPORTACION EL MODELO USER
const User = require('../models/User')
//DEFINICION DE LA ESTRATEGIA
const LocalStrategy = require('passport-local').Strategy


//CONFIGURACION DE LA ESTRATEGIA
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async(email,password,done)=>{
    //TRAER AL USUARIO EN BASE AL EMAIL
    const userBDD = await User.findOne({email})
    //VALIDACION DEL USUARIO 
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    //VALIDACION DE LAS CONTRASEÑAS
    const passwordUser = await userBDD.matchPassword(password)
    //VALIDACION DEL PASSWORD EN LA BDD
    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)
    //RETONAR AL USUARIO
    return done(null,userBDD)
}))


//SERIALIZACION DEL USUARIO 
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

//DESEARILIZACION DEL USUARIO
passport.deserializeUser(async (id, done) => {
    //TRAER AL USARIO EN BASE AL ID DE LA SESSION
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});
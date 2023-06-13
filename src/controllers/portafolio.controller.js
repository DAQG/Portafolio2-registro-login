//HACER LA IMPORTACION DEL MODELO COM PRIMER PASO 
const Portfolio = require('../models/Portafolio')


// A APRTIR DEL MODELO USAR EL METODO FIND Y LUEGO EL METODO LEAN
const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
}

const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}

//CAPTURAR LOS DATOS DEL FORMULARIO
const createNewPortafolio =async (req,res)=>{
    //DESESTRUCTURAR
    const {title, category,description} = req.body
    //CREAR UNA NUEVA INSTACIA
    const newPortfolio = new Portfolio({title,category,description})
    //EJECUTAR EL NUEVO
    await newPortfolio.save()
    res.redirect('/portafolios')

}

const renderEditPortafolioForm =async(req,res)=>{
    // A partir del metodo llamara al metodo findById
    const portfolio = await Portfolio.findById(req.params.id).lean()
    // con la variable del portafolio pintar la vista del formulario
    res.render('portafolio/editPortfolio',{portfolio})
}

const updatePortafolio = async(req,res)=>{
    //CAPTURAMOS LOS PASOS DEL FORMULARIO
    const {title,category,description}= req.body
    // A PARTIR DEL MODELO LLAMAR AL METODO FINDbYIDAND UPDATE
    // PASADO A LA FUNCION EL ID DEL PORTAFOLIO Y LOS DATOS A MODIFICAR
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    //REDIRECCIONA A LA VISTA PORTAFOLIOS
    res.redirect('/portafolios')
}
const deletePortafolio = async(req,res)=>{
    // a partir del modelo usar el metodo findbyandDelete
    await Portfolio.findByIdAndDelete(req.params.id)
    //hacer el redirect
    res.redirect('/portafolios')
}

//EXPORTACION NOMBBRADO
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}
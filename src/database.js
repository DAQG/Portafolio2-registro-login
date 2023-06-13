const mongoose = require('mongoose')

const MONGODB_URL='mongodb://0.0.0.0:27017/portafolio'


connection=async()=>{
    try {
        await mongoose.connect(MONGODB_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("database conectado")

    } catch (error) {
        console.log(error)
    }
}
module.exports=connection
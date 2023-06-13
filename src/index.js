const app = require('./server.js')
const connection = require('./database.js')


connection()
app.listen(3000,()=>{
    console.log(`Server on port ${3000}`);
})
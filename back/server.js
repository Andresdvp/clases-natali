const app = require("./app")

//configurar el archibo de configuracion 
const dotenv =require("dotenv");
dotenv.config({path:'back/config/config.env'})

const server = app.listen(process.env.PORT, () => {
    console.log(`hola si funsiona en el puerto: ${process.env.PORT}en modo ${process.env.NODE_ENV}`)
})
//importaciones
const app = require("./app")
const connecDaatabase = require("./config/database");

//configurar el archibo de configuracion 
const dotenv =require("dotenv");
dotenv.config({path:'back/config/config.env'})

//configurar base de datos 
connecDaatabase(); 

//llamamos al server
const server = app.listen(process.env.PORT, () => {
    console.log(`hola si funsiona en el puerto: ${process.env.PORT} en modo ${process.env.NODE_ENV}`)
})
const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

//importar rutas 
const productos = require("./routes/pruducts")

app.use('/api',productos)//sujeto a decision (ruta de navegador)

//para exportar libreria o toda la clase
module.exports=app

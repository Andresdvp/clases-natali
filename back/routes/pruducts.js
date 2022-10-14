const express=require("express")
const router =express.Router();//se crea la ruta 

const {getProducts}= require("../contollers/productsContoller")//Traemos la respuesta desde el controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta queremos ver el getProducts

module.exports=router;
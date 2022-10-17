const express=require("express")
const router =express.Router();//se crea la ruta 

const {getProducts, newProduct}= require("../contollers/productsContoller")//Traemos la respuesta desde el controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta queremos ver el getProducts

router.route('/productos/nuevo').post(newProduct)//establecemos la ruta del nuevo producto



module.exports=router;
const express=require("express")
const router =express.Router();//se crea la ruta 

const {getProducts, newProduct, getProductById, updateproduct, deleteproduct}= require("../contollers/productsContoller")//Traemos la respuesta desde el controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta queremos ver el getProducts

router.route('/productos/nuevo').post(newProduct)//establecemos la ruta del nuevo producto

router.route('/productos/:id').get(getProductById)//establecemos la ruta del producto por id 

router.route('/productos/:id').put(updateproduct)//establecemos ruta de actualizacion 

router.route('/productos/:id').delete(deleteproduct)//establecemos ruta de eliminacion del producto
module.exports=router;
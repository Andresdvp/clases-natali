const express=require("express")
const router =express.Router();//se crea la ruta 

const {getProducts, newProduct, getProductById, updateproduct, deleteproduct}= require("../contollers/productsContoller")//Traemos la respuesta desde el controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta queremos ver el getProducts

router.route('/producto/nuevo').post(newProduct)//establecemos la ruta del nuevo producto

router.route('/producto/:id').get(getProductById)//establecemos la ruta del producto por id 

router.route('/producto/:id').put(updateproduct)//establecemos ruta de actualizacion 

router.route('/producto/:id').delete(deleteproduct)//establecemos ruta de eliminacion del producto
module.exports=router;
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const producto= require("../models/productos.js");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));//usurpacion del feach


//ver lista de productos
exports.getProducts= catchAsyncErrors( async (req,res,next) =>{

    const productos =await producto.find();

    if (!productos){//verifico si el producto no existe
        return next(new ErrorHandler("Informacion no encontrada", 404))
        }

    res.status(200).json({//si el estado de productos es 200 me arroja este json 
        success:true,
        cantidad: productos.length,
        productos

    })

})

  // ver producto por ID
exports.getProductById= catchAsyncErrors( async(req, res, next)=>{
 const productoId = await producto.findById(req.params.id)
 
    if (!productoId){
        return next(new ErrorHandler("Producto no encontrado", 404))
        }
    
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras informacion sobre tu producto",
        productoId
    })

})

//Update o actualizacion de un producto
exports.updateproduct= catchAsyncErrors( async (req,res,next)=>{

    let productoId = await producto.findById(req.params.id)

        if (!productoId){//verifico si el producto no existe
            return next(new ErrorHandler("Producto no encontrado", 404))
            }


    //si el objeto existe entonses si actualizo
    productoId = await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,//valido el producto nuevo o actualizado
        runValidators:true

    });
    //respondo OK si el producto si actualizo
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        productoId
    })

    
})

//eliminar producto
exports.deleteproduct= catchAsyncErrors( async (req,res,next)=>{

    const productoId = await producto.findById(req.params.id)

     if (!productoId){//verifico si el producto no existe
            return next(new ErrorHandler("Producto no encontrado", 404))
            }

        //eliminar el proceso
        await productoId.remove();
        res.status(200).json({
            success:true,
            message:"Producto eliminado correctamente"
        })
})


//crear nuevo producto /api/productos
exports.newProduct=catchAsyncErrors( async (req,res,next)=>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    }) 

})



/*

//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); llamar al metodo para ver la consulta


//ver por ID 

function verProductosID(id){
    fetch('http://localhost:4000/api/productos/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))

}

verProductosID('634dde614976ddf8324f7b5f');
*/
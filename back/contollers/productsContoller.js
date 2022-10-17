const producto= require("../models/productos.js")
//ver lista de productos
exports.getProducts=(req,res,next) =>{
    res.status(200).json({//si el estado de productos es 200 me arroja este json 
        success:true,
        message:  "En esta ruta ud va a poder ver todos  los productos "

    })
}

//crear nuevo producto /api/productos
exports.newProduct=async (req,res,next)=>{
    const product=await producto.create(req.body)

}
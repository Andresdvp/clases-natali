
exports.getProducts=(req,res,next) =>{
    res.status(200).json({//si el estado de productos es 200 me arroja este json 
        success:true,
        message:  "En esta ruta ud va a poder ver todos  los productos "

    })
}
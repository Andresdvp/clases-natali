const producto= require("../models/productos.js")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));//usurpacion del feach

//ver lista de productos
exports.getProducts=async (req,res,next) =>{

    const productos =await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({//si el estado de productos es 200 me arroja este json 
        success:true,
        cantidad: productos.length,
        productos

    })

}
  // ver producto por ID
exports.getProductById= async(req, res, next)=>{
 const productoId = await producto.findById(req.params.id)
 
    if (!productoId){
        return res.status(404).json({
            success:false,
            message:"No encontramos este producto",
            error:true
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras informacion sobre tu producto",
        productoId
    })

}

//Update o actualizacion de un producto
exports.updateproduct=async (req,res,next)=>{

    let productoId = await producto.findById(req.params.id)

    if (!productoId){//verifico si el producto no existe
        return res.status(404).json({
            success:false,
            message:"No encontramos este producto"
        })
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

    
}

//eliminar producto
exports.deleteproduct=async (req,res,next)=>{

    const productoId = await producto.findById(req.params.id)

    if (!productoId){//verifico si el producto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message:"No encontramos este producto"
        })
    }
        //eliminar el proceso
        await productoId.remove();
        res.status(200).json({
            success:true,
            message:"Producto eliminado correctamente"
        })
}


//crear nuevo producto /api/productos
exports.newProduct=async (req,res,next)=>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    }) 

}



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
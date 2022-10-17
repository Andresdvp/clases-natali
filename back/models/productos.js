const mongoose= require("mongoose")

//esquema de productos
const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        //trim elimina los espacios en blabco adelante y atras
        trim:true,
        //tamaño maximo del nombre
        maxLength:[120,"el nombre no debe exceder los 120 caracteres."]
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el presio del producto"],
        maxLength:[8,"el precio no debe puede estar por encima de 99'999.999. "],
        //valor por defecto
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"por favor  registre una descripcion para el producto."]
       // maxLength oopcional
    },
    calificacion:{
        type:Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],    
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Medicamentos genericos",
                "Medicamentos naturales ",
                "Productos de aseo",
                "Acesorios ",
                "juguetes"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"por favor registre el vendedor del producto. "]
    },
    inventiario:{
        type:Number,
        required:[true,"por favorbregistre el stock del producto. "],
        maxLength:[5,"Cantidad maxima del producto"],
        default: 0
    },
    nunCalificaciones:{
        type:Number,
        default: 0

    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            },
            fechaComentario:{
                type:Date,
                default:Date.now
            }
                
        }
    ],
    fechaCreacion:{
        //tipo fecha
        type:Date,
        //fecha automatica
        default:Date.now
    }

})

//exportar el modulo en un modelo mongoose, que se va llamar procuctos y viene del esquema productosSchema 
module.exports=mongoose.model("procuctos",productosSchema)
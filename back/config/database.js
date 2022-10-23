const mongoose = require("mongoose");

const connecDaatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(con => {
        console.log(`base de datos mongo conectada en el servido ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexcion a la base de datos`)
    })
 
}


module.exports=connecDaatabase; 
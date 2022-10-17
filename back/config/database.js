const mongoose = require("mongoose");

const connecDaatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(con => {
        console.log(`base de datos mongo conectada en el servido ${con.connection.host}`)
    })

}


module.exports=connecDaatabase;
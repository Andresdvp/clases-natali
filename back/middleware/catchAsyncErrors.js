module.exports = func => (req, res, next) =>
//resuelve y captura los errores de una promesa
    Promise.resolve(func(req, res, next))
        .catch(next)



   

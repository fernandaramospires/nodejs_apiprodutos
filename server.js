const express = require('express')
const routerAPI = require('./api/routes/routerAPI')

const app = express()

app.use('/api', routerAPI)

app.use(function(req, res){
    res.status(404).send('Recurso não encontrado')
})

app.listen(8080, function(){
    console.log('Servidor rodando na porta 8080')
})
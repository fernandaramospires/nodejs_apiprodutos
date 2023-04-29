const express   = require('express')
const routerAPI = express.Router()

routerAPI.use(express.urlencoded())
routerAPI.use(express.json())

const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
 }
 
routerAPI.get('/produtos', function(req, res){
    res.json(lista_produtos)
})

routerAPI.post('/produtos/', function(req, res){ 
    let produto = {
        "id": lista_produtos.produtos.length + 1,
        "descricao": req.body.descricao,
        "marca": req.body.marca,
        "valor": req.body.valor
    }

    lista_produtos.produtos.push (produto);
    res.json('{message: "Produto inserido com sucesso"}')
})

routerAPI.put('/produtos/:id', function(req, res){  
    let index = lista_produtos.produtos.findIndex(item => item.id == req.params.id)

    if(index === -1){
        res.json('{message: "Produto não encontrado"}')  
    }          
    
    lista_produtos.produtos[index].valor     = req.body.valor;    
    lista_produtos.produtos[index].descricao = req.body.descricao;  
    lista_produtos.produtos[index].marca     = req.body.marca;      
    
    res.json('{message: "Produto atualizado com sucesso"}')
})

routerAPI.delete('/produtos/:id', function(req, res){  
    let index = lista_produtos.produtos.findIndex(item => item.id == req.params.id)

    if(index === -1){
        res.json('{message: "Produto não encontrado"}')  
    }       
    
    lista_produtos.produtos.splice(index, 1);    
    
    res.json('{message: "Produto deletado com sucesso"}')
})


module.exports = routerAPI
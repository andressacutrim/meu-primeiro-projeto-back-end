const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response){
response.json({
    nome: 'Andressa Cutrim',
    imagem: 'https://i.pinimg.com/280x280_RS/71/8c/ea/718cea776003c7789f09cab15e5bfa68.jpg',
    minibio: 'Engenheira e desenvolvedora'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
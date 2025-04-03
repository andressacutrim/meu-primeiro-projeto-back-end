const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Andressa Cutrim',
        imagem: 'https://i.pinimg.com/280x280_RS/71/8c/ea/718cea776003c7789f09cab15e5bfa68.jpg',
        minibio: 'Engenheira e Desenvolvedora'

    },
    {
        nome: 'Iana Cham',
        imagem:'',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome:'Nina da Hora',
        imagem:'',
        minibio: 'Hacker antiracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
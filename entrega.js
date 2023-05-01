import Pessoa from "./Pessoa.js"
import express from 'express'

const app = express()
const port = 3000

const pessoa1 = new Pessoa(
    "Laura","laura@gmail.com","27",["caminhar","trico"]
)
const pessoa2 = new Pessoa(
    "Leonardo","leo@gmail.com","25",["golf","jogar dominó"]
)
const pessoa3 = new Pessoa(
    "Lucas","lucas@gmail.com","25",["pilates","jogar bocha"]
)

app.get('/pessoa',(requisicao,resposta)=>{
    resposta.json(pessoa1)
})

const lista = [pessoa1,pessoa2,pessoa3]

app.get('/pessoa2',(requisicao,resposta)=>{
    resposta.json(lista)
})

app.listen(port,()=>{
    console.log(`API executando na porta ${port}`)
})

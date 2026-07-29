const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000

server.listen(8000, () => {
<<<<<<< HEAD
console.log("Boas-vindas ao AllBooks. Acesse essa API em http://localhost:8000")
=======
  console.log("Boas-vindas ao AllBooks")
console.log("Essa é uma API de uma loja de livros online")
console.log("Acesse essa API em http://localhost:8000")
>>>>>>> 2051ee271d3a7de5ec3fca97dfd82f1742539c3b
})


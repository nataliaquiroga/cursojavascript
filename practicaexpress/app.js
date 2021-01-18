let express = require('express')
let path = require('path')
const { allowedNodeEnvironmentFlags } = require('process')
let app = express()
app.listen(3000,() => console.log ('levantado'))

app.get('/home',(req,res) => {let contenido='Hola, estamos en el home'
res.send(contenido)
})

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil',(req,res) => {
res.send(saludo)
})

let producto = {
    tipoProducto: null,
    precio: null,
    cantidad: null

}

app.get('/producto/agregar',(req,res) => {
res.send(producto)
})


app.get('/',(req,res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlPath)
})
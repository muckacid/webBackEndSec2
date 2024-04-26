const { Router } = require('express')
const rutas = Router()

rutas.get('/', (req, res) => {
    //let nombre = conexion.getdata(nombre)
    let nombre = "maximiliano"
    let apellido = "moraga"
    res.render('../views/home.ejs', { nombre, apellido })
})

rutas.get('/about', (req, res) => {
    res.send("about")
})

rutas.get('/downloads', (req, res) => {
    res.send("downloads")
})

module.exports = rutas



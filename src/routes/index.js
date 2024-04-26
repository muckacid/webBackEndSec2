const { Router } = require('express')
const rutas = Router()

rutas.get('/', (req, res) => {
    res.send("tomalo todo")
})

rutas.get('/about', (req, res) => {
    res.send("about")
})

rutas.get('/downloads', (req, res) => {
    res.send("downloads")
})

module.exports = rutas



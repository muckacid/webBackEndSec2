const express = require('express')
const servidor = express()
const rutas = require('./routes/index')
const path = require('path')

servidor.use(rutas)


const PORT = 2000
servidor.listen(PORT, () => {
    console.log(`empezo el servicio en la siguiente ruta:`)
    console.log(`http://localhost:${PORT}`)
})
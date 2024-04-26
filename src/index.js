const express = require('express')
const servidor = express()
const rutas = require('./routes/index')
const path = require('path')

//settings
const PORT = 2000
servidor.use(rutas)
servidor.set('view engine', 'ejs');
servidor.set('views', path.join(__dirname, 'views'));

//servidor.use(express.static(path.join(__dirname, 'public')));
servidor.listen(PORT, () => {
    console.log(`empezo el servicio en la siguiente ruta:`)
    console.log(`http://localhost:${PORT}`)
})
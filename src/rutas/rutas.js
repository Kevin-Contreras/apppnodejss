var controlador = require('../controlador/controlador'),
express = require('express'),
rutas = express.Router()

rutas
		.get('/',controlador.getAll)
		.get('/subir',controlador.insertar)
		.post('/subiendo',controlador.colocar)
		.post('/eliminar/:title',controlador.eliminar)
		.get('/editar/:title',controlador.soloUno)
		.post('/edi/:title',controlador.actualizar)
		.post('/comentario',controlador.comentario)

module.exports = rutas
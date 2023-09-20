var express = require('express'),
	favicon = require('serve-favicon'),
	bodyParse = require('body-parser'),
	morgan = require('morgan'),
	jade = require('jade'),
	publico = express.static( __dirname +'/publico'),
		rutas = require('./rutas/rutas'),
	apires = require('express-method-override')('_method'),
	faviconUrl =  __dirname + '/publico/img/1.png',
	vista = __dirname + '/view',
	puerto = (process.env.PORT||3000),
	app = express()


	app
		.set('views',vista)
		.set('port',puerto)
		
		.use(favicon(faviconUrl))
		.use(bodyParse.urlencoded ({extended:true}))
		.use(morgan('dev'))
		.use(apires)
		.use(publico)
		.use(rutas)

module.exports = app





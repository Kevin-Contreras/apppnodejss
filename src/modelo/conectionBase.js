var mysql = require('mysql2'),
	base = require('./BaseDatos'),

	opctiones = {
		host:base.mysql.host,
		port:base.mysql.port,
		user:base.mysql.user,
		password:base.mysql.pass,
		database:base.mysql.db
	},
conection = mysql.createConnection(opctiones)
conection.connect((err)=>{
	if (err) {
		console.log(err)
	}
	else{
		console.log('la conection fue exitosa el numero de conection es'+ conection.threadId)
	}
})

module.exports = conection

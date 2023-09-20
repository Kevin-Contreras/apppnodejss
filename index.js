var app = require('./app.js')

	 app.listen(app.get('port'), ()=>{
		console.log('el servidor'+ app.get('port'))
	})


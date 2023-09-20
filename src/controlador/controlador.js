var modelo = require('../modelo/modelo'),
controlador = (req,res,next)=>{

}
controlador.getAll = (req,res,next)=>{
		modelo.getAll((err,resultado)=>{
			if (err) {
			console.log(err)
		}
		else {
			var locals = new Object();
			locals.title = 'pumplen';
			locals.datos = resultado;
			res.render('index',locals)

		}

		})
}
controlador.insertar = (req,res,next)=>{
	res.render('subir')
}
controlador.colocar = (req,res,next)=>{
	let datos = {
			title: req.body.principal,
			foto: req.body.img,
			description:req.body.comentario
		}
	modelo.insert(datos,(err)=>{
		 (err)?res.redirect('/subir'):res.redirect('/')
	})
}
controlador.eliminar = (req,res,next)=>{
	var datos = req.params.title
	modelo.eliminar(datos,(err)=>{
		if (err) {
			res.redirect('/editar')
		}
		else{
			res.redirect('/')
		}
	})
}

controlador.soloUno = (req,res,next)=>{
	var title = req.params.title
	modelo.soloUno(title,(err,resultado)=>{
		if (err){
			res.redirect('/')
		}
		else{
			var locals = new Object();
			locals.title = 'pumplen';
			locals.datos = resultado;
			res.render('edit',locals)
		}
	})
}
controlador.actualizar = (req,res,next)=>{
	let datos = {
			title: req.body.principal,
			foto: req.body.img,
			description:req.body.comentario
		}
		modelo.actualizar(datos,(err)=>{
			 (err)?res.render('edit'):res.redirect('/')
		})
}
controlador.comentario =(req,res,next)=>{

	let datos = {
		description:req.body.description,
		mensaje:req.body.mensaje
		}
	modelo.mensaje(datos,(err)=>{
		 (err)?res.redirect('/'):res.redirect('/')
	})
}
module.exports = controlador
'use strict'
var conection = require('../modelo/conectionBase.js'),

modelo = ()=>{

}

modelo.getAll = (cb) => {
	conection.query('SELECT * FROM fotos ', cb )
}

modelo.insert = (datos,cb) =>{
	conection.query('INSERT INTO fotos SET ?', datos , cb)
}
modelo.eliminar = (datos,cb) =>{
	conection.query('DELETE FROM fotos WHERE title = ? ',datos,cb )
}
modelo.soloUno = (datos,cb)=>{
	conection.query('SELECT * FROM fotos WHERE title = ?',datos,cb)
}	
modelo.actualizar = (datos,cb)=>{
	conection.query('UPDATE fotos SET ? WHERE title = ?',[datos,datos.title],cb)
}
modelo.mensaje =(datos,cb)	=>{
	conection.query('UPDATE fotos SET ? WHERE description = ?',[datos,datos.description],cb)
}			
module.exports = modelo

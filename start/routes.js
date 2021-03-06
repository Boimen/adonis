'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Router = require ('express')
const {serverpage,mostrarproductos,buscarprodNombre,borrarproducto,modificarproducto,guardarproducto} = require ('../Controllers/Productos')
const RouterProductos = new Router ()
const Route = use ('Route')
 
Route.get('/', mostrarproductos)


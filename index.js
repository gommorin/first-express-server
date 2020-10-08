/* EJERCICIO EN CLASE > EXPRESS Y FUNCIONES GET Y POST */

/*
const { response } = require('express')
const express = require('express')

// nuestro primer servidor - se puede llamar app
// ejecutamos express y eso nos regresar un server
const server = express()

// agregamos métodos y rutas - ejemplo: POST /hola
server.get('/hola', (request,response) => {
    console.log('hola desde express')
    response.send('hola desde express') // ejecuta .write y .end al mismo tiempo
})

server.post('/hola', (request,response) => {
    console.log('hola desde express usando post')
    response.send('hola desde express con post') // ejecuta .write y .end al mismo tiempo
})

// le pedimos al servidor que esté listo para escuchar lo que queremos ejecutar
server.listen(8080,() => {
    console.log('el servidor está listo')
})
*/

// ----------------------------------------------------------------------- //

// PRACTICA PARA SIGUIENTE CLASE

/*
    Replicar el servidor que teníamos en el ejericio anterior (/primer-server-hola-adios/index.js) en http ahora con express
    POST /hola -> hola koders, estás intentando crear
    GET /hola -> hola koder, estás intentando obtener
    POST /adios -> hasta la vista baby con un post
    GET /adios -> hasta la vista baby con un get
    Cualquier método en otra ruta deberá regresar -> no hay nada aquí (buscar info en documentación expressjs)
*/

const { response } = require('express')
const express = require('express')

// nuestro primer servidor - se puede llamar app
// ejecutamos express y eso nos regresar un server
const server = express()

// agregamos métodos y rutas - ejemplo: POST /hola
server.get('/hola', (request,response) => {
    console.log('hola koder, estás intentando obtener con express')
    response.send('hola koder, estás intentando obtener con express') // ejecuta .write y .end al mismo tiempo
    })
server.get('/adios', (request,response) => {
    console.log('hasta la vista baby con un get con express')
    response.send('hasta la vista baby con un get con express') // ejecuta .write y .end al mismo tiempo
})
server.post('/hola', (request,response) => {
    console.log('hola koder, estás intentando crear con express')
    response.send('hola koder, estás intentando crear con express') // ejecuta .write y .end al mismo tiempo
    })
server.post('/adios', (request,response) => {
    console.log('hasta la vista baby con un post con express')
    response.send('hasta la vista baby con un post con express') // ejecuta .write y .end al mismo tiempo
})

// le pedimos al servidor que esté listo para escuchar lo que queremos ejecutar
server.listen(8080,() => {
    console.log('server is ready. empezamos a usar el servidor')
})
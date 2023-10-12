//Depencia commonjs
const express = require('express')

//crear el objeto app
const app = express()

//primera prueba de url del servidor
app.get('/prueba' ,
        function(request , response){
            response.send("Holaaaaa");
});


//uris de bootcamps

//traer todos los bootcamps
app.get('/api/v1/devcamp/bootcamps' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" : "mostrar todos los bootcamps"
                   })
        })

//traer bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `seleccionando bootcamp con id ${request.params.id}` 
                   })
        })

//traer todos los bootcamps
app.post('/api/v1/devcamp/bootcamps' , 
        (request , response)=> { 
            response
                   .status(201)
                   .json({
                        "success" : true,
                        "msg" : "crear bootcamp"
                   })
        })

//actualizar bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `actualizando bootcamp con id ${request.params.id}` 
                   })
        })

//eliminar bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `eliminando bootcamp con id ${request.params.id}` 
                   })
        })

//evidencia: uris de curses
//evidencia: uris para reviews
//evidencia: uris para users



//establecer servidor
const PUERTO = 4500

app.listen( PUERTO , 
           console.log("Servido escuchando en el puerto:" + PUERTO))
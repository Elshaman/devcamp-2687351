//Depencia commonjs
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencias de rutas:
const bootcampRoutes = require('./routes/bootcampRoutes')

//dependencia para conexion a bd
const conectDB = require('./config/db')

//establecer archivo .env del proyecto
dotenv.config({
        path: './config/.env'
    })

conectDB()

//crear el objeto app
const app = express()

//express para recibir datos json
app.use(express.json())

//vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps' , bootcampRoutes)


//primera prueba de url del servidor
app.get('/prueba' ,
        function(request , response){
            response.send("Holaaaaa");
});



//establecer servidor
const PUERTO = process.env.EXPRESS_PORT

app.listen( PUERTO , 
           console.log( `Servidor escuchando en el puerto: ${PUERTO}`.bgBlue.red))
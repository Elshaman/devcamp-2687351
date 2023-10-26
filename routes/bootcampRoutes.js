const express = require('express')
const bootcampModel = require('../models/BootcampsModels')
const router = express.Router()

//traer todos los bootcamps
router.get('/' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" : "mostrar todos los bootcamps"
                   })
        })

//traer bootcamp por id
router.get('/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `seleccionando bootcamp con id ${request.params.id}` 
                   })
        })

//traer todos los bootcamps
router.post('/' , 
         (request , response)=> { 
            //crear el nuevo bootcamp
            //const bootcamp = bootcampModel.
            //                  create( request.body  )
            response
                   .status(201)
                   .json({
                        "success" : true,
                        "data" : request.body
                   })
        })

//actualizar bootcamp por id
router.put('/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `actualizando bootcamp con id ${request.params.id}` 
                   })
        })

//eliminar bootcamp por id
router.delete('/:id' , 
        (request , response)=> { 
            response
                   .status(200)
                   .json({
                        "success" : true,
                        "msg" :  `eliminando bootcamp con id ${request.params.id}` 
                   })
        })


module.exports = router

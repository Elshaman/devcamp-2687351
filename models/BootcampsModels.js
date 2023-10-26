const mongoose = require('mongoose')

//Definir el modelo para bootcamps

const BootcampSchema = mongoose.Schema({
    name:{
        type: String, 
        unique: [ true , "nombre de bootcamp debe ser ùnico"],
        required: [ true , "nombre de bootcamp requerido"],
        maxlength: [50 , "longitud de nombre menor a 50"]
    }, 
    phone:{
        type: Number,
        maxlength: [10 , "longitud de telefono menor a 10"]
    },
    address:{
        type:String,
        required: [ true , "direccion requerida"],
    },
    topics: {
        type: [String],
        enum: [
            "AI" ,
            "Frontend/UX", 
            "Backend",
            "DevOps"
        ]
    }, 
    averageRating: Number,
    createdAt: Date
})

module.exports = mongoose.model('Bootcamps' ,
                                BootcampSchema )
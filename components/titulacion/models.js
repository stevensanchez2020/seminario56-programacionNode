const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    tutor: {
        type: schema,ObjectId,
        ref: Docente,
    },
    revisor: {
        type: schema,ObjectId,
        ref: Docente,
    },
    estudiante: {
        type: schema,ObjectId,
        ref: Estudiante,
    },
    tipo_titulacion: String,
    archivo: String,
    fecha_archivo: Date,
    estado: String,
    })

const model = mongoose.model( 'Titulacion', mySchema)
module.exports = model 
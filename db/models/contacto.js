import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const contactoSchema = Schema({
    email:{
        type:String,
        trim:true,
        required:'Favor incluir un email',
        lowercase:true,
        unique:true,
        match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    },
    mensaje:{
        type:String
    },
    created_At:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('Contacto',contactoSchema)

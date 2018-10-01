import mongoose from 'mongoose'
import config from '../config'

mongoose.Promise = global.Promise

mongoose.connect(config.MONGODB_URI).then(
    ()=>{
        console.log('Conexion exitosa a mongodb')
    },
    err => console.log(err.message)
)
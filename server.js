import express from 'express'
const app = express()


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
const PORT = process.env.PORT || 5555
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en ${PORT}`)
})
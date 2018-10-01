import express from 'express'
import expressGraphQl from 'express-graphql'
import schema from './graphql'

const app = express()


require('./db')

app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}))

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
const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Terhubung')
}).catch((e)=>{
    console.log(e)
    console.log('Tidak Terhubung')
})

app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))

app.get('/', (req, res)=>{
    res.send('<h1>Selamat Datang Di Petshop Kami</h1>')

})

app.use('/pet/', require('./routes/pet'))

app.listen(4000, () => {
    console.log('Server Dimulai')
})

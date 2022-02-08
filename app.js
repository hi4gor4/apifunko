const express = require("express")
const app = express()
const morgan = require('morgan')
const bodyParser = require("body-parser")


const rotaFunkos = require('./routes/funkos')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/funko', rotaFunkos)
app.use((req, res, next)=>{
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control-Allow-Header',
    'Origin, X-Requrested-With, Content-Type, Accept, Authorization',
    )
    if (req.method == 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
        return res.status(200).send({});      
    }
    next()

})

app.use((req, res, next)=>{
    const erro = new Error('Not Found');
    erro.status = 404;
    next(erro);
})


app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;
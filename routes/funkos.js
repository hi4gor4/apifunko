const express  = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem: "rota fino do fino"
    })
});

router.post('/', (req, res, next)=>{
    const funko = {
        numero: req.body.numero,
        colecaoId: req.body.colecaoId,
        nome: req.body.nome,
        lancamento: req.body.lancamento,
        imagem: req.body.imagem

    }



    res.status(200).send({
        mensagem: "Funko adicionado",
        numero: funko.numero,
        colecaoId: funko.colecaoId
    })
});

router.get('/:id_funko', (req, res, next)=>{
    const id = req.params.id_funko
    res.status(200).send({
        mensagem: "post fino do fino",
        numeroFunko: id
    })
});
module.exports = router;
const express = require("express")
const router = express.Router()
const Instrutor = require("./Instrutor")
const idSessionUsuario = require("../middlewares/idSessionUsuario")

router.get("/cadastro/instrutor", (req, res) =>{

res.render("instrutores/cadastroInstrutor.ejs")
 
/*     res.send(idSessionUsuario)
 */    
})

router.post("/cadastrarInstrutor", (req, res) =>{
    const idUsuario = req.body.idUsuario
    const nomeInstrutor = req.body.nomeInstrutor
    const cpfInstrutor = req.body.cpfInstrutor
    const enderecoInstrutor = req.body.enderecoInstrutor
    const contatoInstrutor = req.body.contatoInstrutor
    const dataNascimentoInstrutor = req.body.dataNascimentoInstrutor

    Instrutor.create({
        idUsuario: idUsuario,
        cpf: cpfInstrutor,
        endereco: enderecoInstrutor,
        nomeCompleto: nomeInstrutor,
        celular: contatoInstrutor,
        dataDeNascimento: dataNascimentoInstrutor
    }).then(() =>{
        res.send("cadastrado")
    }).catch((err) =>{
        res.send("/f")
    })
})

module.exports = router;

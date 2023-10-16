const express = require("express")
const router = express.Router()
const Curso = require("./Curso")
const User = require("../user/User")
const Instrutor = require("../instrutor/Instrutor")

router.get("/cadastro/curso", (req,res) =>{
    if(req.session.user != undefined){
        idUsuarioSession = req.session.user.id

        User.findOne({where: {id: idUsuarioSession}}).then(usuario =>{
            Instrutor.findOne({where: {idUsuario: usuario.id}}).then(instrutor =>{

                res.render("curso/criarCurso.ejs", {usuario: usuario, instrutor: instrutor})
            })
            

        })

    }


})

router.post("/cadastrarCurso", (req, res) =>{
    const tituloCurso = req.body.tituloCurso
    const descricaoCurso = req.body.descricaoCurso
    const precoCurso = req.body.precoCurso
    const instrutorCurso = req.body.instrutorCurso
    const imagem = req.body.imagemCurso
    const link = req.body.linkCurso

    Curso.create({
        titulo: tituloCurso,
        descricao: descricaoCurso,
        preco: precoCurso,
        idInstrutor: instrutorCurso,
        imagemCurso: imagem,
        linkCurso: link


    }).then(() => {
        res.send("cadastrado")
    }).catch((err) =>{
        res.send(err)
    })

})


module.exports = router

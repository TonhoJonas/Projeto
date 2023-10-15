const express = require("express")
const router = express.Router()
const Curso = require("./Curso")

router.get("/cadastro/curso", (req,res) =>{
    res.render("curso/criarCurso.ejs")
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
        res.send("d")
    })

})


module.exports = router

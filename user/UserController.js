const express = require("express")
const router = express.Router()
const User = require("./User")
const bcrypt = require("bcryptjs") 

router.get("/login", (req, res) =>{
    res.render("login/login.ejs")
})

router.get("/cadastro", (req, res) => {
    res.render("login/cadastro.ejs")


})

router.post("/cadastrar/usuario", (req, res) =>{
    var nomeUsuario = req.body.nomeUsuario
    var emailUsuario = req.body.emailUsuario
    var senhaUsuario = req.body.senhaUsuario

    User.findOne({where: {email: emailUsuario}}).then(user =>{
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(senhaUsuario, salt)

            User.create({
                nomeUsuario: nomeUsuario,
                email: emailUsuario,
                senha: hash
            }).then(() =>{
                res.redirect("/")
            }).catch((err) =>{
                res.redirect("/f")
            })
        }else{
            res.redirect("/f2")
        }
    })

})
module.exports = router;
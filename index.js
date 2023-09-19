const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/connection")

// view engine (para utilizar o ejs)

app.set("view engine", "ejs")

//body parser (acessar formularios)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//static(para usar arquivos estaticos fts, css)
app.use(express.static("public"))


//database connection

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão ao banco de dados realizada com sucesso")
    }).catch((error) =>{
        console.log("Erro na conexão com o banco de dados")
    })



app.get("/" , (req,res) =>{
    res.render("index")
})


app.listen(8080, () =>{
    console.log("O servidor foi executado")
})
const express = require("express")
const router = express.Router()
/* const User = require("./User")
 */
const bcrypt = require("bcryptjs")

router.get("/login", (req, res) =>{
    res.send("Ola")
})

module.exports = router;
const express = require("express")
const router = express.Router()
/* const User = require("./User")
 *//* const bcrypt = require("bcryptjs") */

router.get("/login", (req, res) =>{
    res.render("login/login.ejs")
})

module.exports = router;
const express=require("express");
const { registroUsuario } = require("../contollers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario)

module.exports= router
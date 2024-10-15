const express = require('express');
const route = express.Router();


route.get('/msg',(req,res)=>{
    res.json({
        code: 403,
        msg: "Usuario ou senha invalida"
    })
})

module.exports = route;
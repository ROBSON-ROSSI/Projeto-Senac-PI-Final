const mysql = require('../banco/bdpetspot');
const express = require('express');
const cors = require('cors');
const route = express.Router();

route.use(cors({
    origin: "*",
    methods: "get, post, put, delete",
    AccessControlAllowOrigin : "*"
}));

route.get('/consulta', (req,res)=>{
    mysql.query('Select * from cadastro_pet', (err, rows) =>{
        if(err){
            throw err;
        } else {
           
            return res.json(rows);
        }
    })
    
});

module.exports = route;
const http = require('express');
const { Sequelize,DataTypes } = require('sequelize');

const User =require('./models/user');
const port = 8080;
const app = http();
const sequelize = new Sequelize('postgres://postgres:Yurelma2018@localhost:5432/estudos');
//usarei o sequilize e o datatype para permitir que me conecte a multiplos banco de dados
const users = User(sequelize,DataTypes);
app.set('view engine', './html/busca.ejs')

// app.set('view engine','usando.ejs')

//O req e responsavel por receber os parametros das rotas inseridas
app.get("/",function(req,res){
    // res.send(req.params);
    //usando arquivo html
    res.sendFile(__dirname + "/html/usando.html"); 
}) 
app.get("/fotos",async(req,res)=>{
    const user = await users.findByPk(1);

    res.render('fotos', {nome: user.name, descricao:user.description})
})

app.listen(port,()=>{
    console.log(`Rodando na url http://localhost:${port}`)
});
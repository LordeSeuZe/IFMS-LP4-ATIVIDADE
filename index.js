//importar o framework express
const express = require("express");

//inicializar a aplicação com o express
const app = express();

//rota padrão
app.get("/", (req,res) => {//localhost:/8080
    res.send("Home");
});

//listar os veículos
app.get("/veiculos", (req,res) => {//localhost:/8080
    res.send("Lista de veículos");
});

//cadastrar veículos
app.get("/cadastro", (req,res) => {//localhost:/8080
    res.send("cadastrar veículo");
});

// porta de acesso ao servidor express
const port = 8080;

// iniciar o servidor 
app.listen(port, console.log(`Servidor rodando na porta ${port}`));
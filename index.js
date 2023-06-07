const express = require('express')
const app = express()
//indicamos que o Express deve considerar
//o body das requisições como Json
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World ok')
})

//Criando url
app.get("/oi", function (req, res) {
    res.send("Oi tudo certo galera!")
});

//Lista de Heróis
const herois = ["Mulher Maravilha", "Capitã Marvel ", "Homem de Ferro"];


//Read All - [GET] /herois
app.get("/herois", function (req, res){
  res.send(herois.filter(Boolean));
});

//Create - [POST] /herois
app.post("/herois", function (req, res){
  
  //console.log(req.body);
 

  const nome = req.body.nome;

  herois.push(nome);
  //console.log(nome, typeof nome);
  res.send("item criado com sucesso");
});


//Read by Id - [GET] /herois/:id
app.get("/herois/:id", function (req, res) {

    const id = req.params.id;
    console.log(id);

    const item  = herois[ id - 1];
   
    if(item != null){
      res.send(item);
    }else{
      res.send("item não encontrado");
    }
});

//UpDate - [PUT] /herois/:id
app.put("/herois/:id", function(req, res){
  const id = req.params.id;
  const novoNome = req.body.nome;
  herois[id-1] = novoNome;
  res.send("item atualizado com sucesso");
});

app.delete("/herois/:id", function(req, res){
  const id = req.params.id;
  delete herois[id- 1];
  res.send("Item removido com sucesso");
})


app.listen(3000, function(){
  console.log("Aplicação rodando em http://localhost:3000");
});


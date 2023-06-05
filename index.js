const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World ok')
})

//Criando url
app.get("/oi", function (req, res) {
    res.send("Oi tudo certo!")
});


app.listen(3000)


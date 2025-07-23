var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/hora', (req, res) => {
  res.send(`Agora são ${new Date().toLocaleString()}`)
})

app.get('/sobre', (req, res) => {
  res.send('Essa é uma rota adicional explicando mais sobre meu projeto!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

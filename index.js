var http = require('http')
  , express = require('express')
  , ee = require('nee')()
  , bodyParser  = require('body-parser')
  , port = process.env.PORT || 3000
  , app = express()
  , server = require('http').Server(app)
  , SSE = require('sse')
  , sse = new SSE(server)
  , path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/message', function (req, res) {
  ee.emit('message', [req.body])
  res.status(200).send()
})

server.listen(port)

sse.on('connection', function(client) {
  ee.on('message', function (message) {
    console.log(JSON.stringify(message))
    client.send(JSON.stringify(message))
  })
})



var needle = require('needle')

needle.post('http://localhost:3000/message', 'kilgore=trout', function (err, response) {
  console.log('When the tupelo\nGoes poop-a-lo\nI\'ll come back to youp-a-lo')
})
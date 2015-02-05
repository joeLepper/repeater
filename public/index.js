window.addEventListener('load', function (e) {
  var es = new EventSource('/sse')

  es.onmessage = function (message) {
    console.log(JSON.parse(message.data))
  }
})
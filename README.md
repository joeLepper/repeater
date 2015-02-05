Repeater
========

Repeater is a micro service which takes POST data that it receives at `/message` and emits a server-sent event to all listening browsers.

See for your self.

Clone it:
`git clone git@github.com:joeLepper/repeater.git && cd repeater`

Get the dependencies:
`npm install`

In one terminal:
`node index.js`

Point a browser to:
`localhost:3000`

In another terminal:
`node client.js`

The browser JS console will show `{ kilgore: trout }` because computers do what you tell them to.

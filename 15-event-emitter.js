const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})



customEmitter.emit('response', 'Rutik', 25)

const http = require('http');

// const server = http.createServer()


// // Using event emitter API
// server.on('request', (req, res) => {
//     // emits request event
//     // subscribe to it / listen for it/ respond to it
//     res.end("Welcome")
// })

// server.listen(5000)
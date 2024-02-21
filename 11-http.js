const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page!')
    }
    if(req.url === '/about'){
        res.end('here is our short about page description')
    }
    res.end(`
        <h1>Oops !!!!</h1>
        <p>We can seem to find the page</p>
        <a href="/">Home</a>`
    )
})

server.listen(5000)
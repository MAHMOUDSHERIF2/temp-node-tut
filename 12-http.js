const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
<p>We cant seem to find page u r looking for</p>  
<a href="/">back home</a>
`)
})

server.listen(5000)
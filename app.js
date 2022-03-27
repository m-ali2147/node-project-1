const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/api/Differently-abled'){
        res.write(JSON.stringify([1,2,3]));
        res.end();

    }

});

server.listen(3000);
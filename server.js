const http=require('http');

const serverConnect=require('./serverConnect');

const server=http.createServer(serverConnect);

server.listen(3000,'0.0.0.0',()=>console.log('Server has started on post 3000'));
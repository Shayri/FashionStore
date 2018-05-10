const http=require('http');

// const serverConnect=require('./serverConnect');

// const serverConnect=require('./src/express1');
const serverConnect=require('./src/mongoIndex');
const server=http.createServer(serverConnect);

server.listen(3000,'0.0.0.0',()=>console.log('Server has started on post 3000'));
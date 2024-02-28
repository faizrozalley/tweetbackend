//import http package from noderuntime
const { log } = require('console');
let http = require('http');

let firstServer = http.createServer((request,response)=>{
    console.log("Creating server ....");
    console.log(request.body);
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write("<h1>Hello from node server</h1>");
    response.write("Another statement");
    response.end();
})

// Expose firstServer on port
firstServer.listen(1234,()=>{
    console.log("Listening on port 1234");
}) 
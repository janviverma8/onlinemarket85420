const http = require('http');
const port = 3001;
const logResponse = require('./export');
const server = http.createServer(function(req,res)
{
    logResponse();
    res.end("Im the backend")
})
server.listen(port,undefined,function()
{
    console.log("running!!!!!!");
})

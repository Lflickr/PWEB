var http = require('http')
//criando um servidor
var server = http.createServer(function(req,res){
    res.end("<html><body>Site</body></html>")
})

server.listen(3000)
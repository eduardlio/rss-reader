var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var httpServer = http.createServer(app);
httpServer.listen(8080);
app.get("/", (req, res) =>{
   res.sendFile(path.join(__dirname + "/index.html"));
});

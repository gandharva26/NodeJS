
// ports are like doors, every application is using its own port for sending and recieving req
// localhost is like a domain name on the web that is used to point to ths self computer
// a request made to the IP address masked by URL is a GET request by a client to the server computer which usually responds with JSON, Web page, HTML, CSS or JS
const http = require('http')
const server = http.createServer((req, res)=>{
console.log("request made")
console.log(req.url, req.method)
res.setHeader('Content-type', 'text/plain')
res.write("Hello world")
res.end()
})
server.listen(3000, 'localhost' , ()=>{
    console.log("server actively listening")
})
// you see "request made" here but not on the server because this page is scripted on the server side
import http from "http";
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text-plain'});
    response.end("i am not in danger i am danger")
});
server.listen(3000,()=>console.log("server is running on port 3000"));
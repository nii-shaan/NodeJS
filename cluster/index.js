const cluster = require("node:cluster");
const http = require("node:http");

//* First time running the application goes to this block as it is master
if (cluster.isMaster) {
  //* Creates Worker that runs the script again and now its not isMaster so it goes to another block
  cluster.fork();
  cluster.fork();

  cluster.on("exit",(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} died`)
  })

} else if (cluster.isWorker) {
  console.log(`Worker: ${process.pid} is active`)
  //* Here ( "How many are forked" ) each worker runs the code again and creates each server, they share the same port;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page")
    console.log(`Request is being handle by Worker ${process.pid}`)
  });

  const PORT = 8000;
  server.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
  });
}

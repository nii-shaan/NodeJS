const http = require("node:http");
const data = require("./data.json");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
});

server.listen(1000, () => {
  console.log("Server running on port 3000");
});

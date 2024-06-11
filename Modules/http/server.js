const http = require("node:http");
const data = JSON.stringify(require("./data.json"));

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.statusCode = 204;
    res.end("you dont have acess");
  } else if (req.url === "/data") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.statusCode = 404;
    res.end("not found");
  }

  if (req.headers["user-agent"].includes("Mozilla/5.0" || "Chrome/125.0.0")) {
    console.log("Request comming from Browser");
  } else {
    console.log(`Request comming from ${req.headers["user-agent"]}`);
  }
});

server.listen(3000, () => {
  console.log(`Server listening on PORT: 3000`);
});

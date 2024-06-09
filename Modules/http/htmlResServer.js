const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Nishan";

  res.writeHead(200, { "Content-Type": "text/html" });

  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);

  // fs.createReadStream("./index.html").pipe(res);
});
server.listen(3000, () => {
  console.log("Server Listening on PORT 3000");
});

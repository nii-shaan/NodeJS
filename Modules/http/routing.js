const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        first_name: "Nishan",
        last_name: "Bista",
        age: 18,
        address: "Kathmandu",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not Found!");
  }
});

server.listen(3000, () => {});

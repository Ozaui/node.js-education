// * request -> server -> response (olumlu, olumsuz)
// * HTTP Methods -> GET, POST, PUT/PATCH, DELETE
const http = require("http");

const server = http.createServer((req, res) => {
  //res.end("I give you a response"); // respoonse - GET isteğine verilen cevap
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Home Page</h1>");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About Page</h1>");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Contact Page</h1>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});

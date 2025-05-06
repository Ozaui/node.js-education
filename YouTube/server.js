// * request -> server -> response (olumlu, olumsuz)
// * HTTP Methods -> GET, POST, PUT/PATCH, DELETE
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("I give you a response"); // respoonse - GET isteğine verilen cevap
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});

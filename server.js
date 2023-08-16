const http = require("http"); //thư viện đã có sẵn khi ta cài nodejs

const hostname = "localhost"; //Đây là localhost
const port = 3000; //đây là PORT

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World HỎI DÂN it");
});

//Listen for request on PORT 3000,
//and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Auto run in localhost
// server.listen(port, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

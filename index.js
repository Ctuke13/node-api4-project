const server = require("./api/server");

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`*** Server listening on http://localhost:${port} ***`);
});

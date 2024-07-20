const express = require('express');
const server = express();

server.all('/', (req, res) => {
   res.write("I'm alive");
   res.end();
});

function keepAlive() {
   server.listen(3001, () => {
      console.log("Server is online!");
   });
}

module.exports = keepAlive;

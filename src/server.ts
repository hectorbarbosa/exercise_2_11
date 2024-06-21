import * as http from 'http';

import routeHandler = require("./routes/router")

const server = http.createServer(routeHandler);
const PORT = parseInt(process.env.SERVER_PORT || '8080');

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
